/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-betaprime-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-betaprime-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-betaprime-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-betaprime-cdf' );
var pdf = require( '@stdlib/stats-base-dists-betaprime-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-betaprime-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-betaprime-skewness' );
var stdev = require( '@stdlib/stats-base-dists-betaprime-stdev' );
var variance = require( '@stdlib/stats-base-dists-betaprime-variance' );
var mode = require( '@stdlib/stats-base-dists-betaprime-mode' );
var mean = require( '@stdlib/stats-base-dists-betaprime-mean' );
var BetaPrime = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BetaPrime, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `alpha` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new BetaPrime( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `beta` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new BetaPrime( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `alpha` and `beta`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new BetaPrime( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var betaprime = new BetaPrime();
	t.strictEqual( betaprime instanceof BetaPrime, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var betaprime = new BetaPrime( 2.0, 4.0 );
	t.strictEqual( betaprime instanceof BetaPrime, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var betaprime = BetaPrime();
	t.strictEqual( betaprime instanceof BetaPrime, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	betaprime = BetaPrime( 2.0, 4.0 );
	t.strictEqual( betaprime instanceof BetaPrime, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `alpha`', function test( t ) {
	var betaprime;

	betaprime = new BetaPrime( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( betaprime, 'alpha' ), true, 'has property' );
	t.strictEqual( betaprime.alpha, 2.0, 'returns expected value' );

	betaprime.alpha = 3.0;
	t.strictEqual( betaprime.alpha, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `alpha` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var betaprime = new BetaPrime();
			betaprime.alpha = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `beta`', function test( t ) {
	var betaprime;

	betaprime = new BetaPrime( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( betaprime, 'beta' ), true, 'has property' );
	t.strictEqual( betaprime.beta, 4.0, 'returns expected value' );

	betaprime.beta = 3.0;
	t.strictEqual( betaprime.beta, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `beta` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var betaprime = new BetaPrime();
			betaprime.beta = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var betaprime;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'kurtosis' ), true, 'has property' );

	betaprime = new BetaPrime( 2.0, 4.5 );
	t.strictEqual( betaprime.kurtosis, kurtosis( 2.0, 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var betaprime;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'mean' ), true, 'has property' );

	betaprime = new BetaPrime( 2.0, 2.0 );
	t.strictEqual( betaprime.mean, mean( 2.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var betaprime;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'mode' ), true, 'has property' );

	betaprime = new BetaPrime( 2.0, 3.0 );
	t.strictEqual( betaprime.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var betaprime;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'skewness' ), true, 'has property' );

	betaprime = new BetaPrime( 0.5, 3.2 );
	t.strictEqual( betaprime.skewness, skewness( 0.5, 3.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var betaprime;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'stdev' ), true, 'has property' );

	betaprime = new BetaPrime( 0.5, 3.2 );
	t.strictEqual( betaprime.stdev, stdev( 0.5, 3.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var betaprime;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'variance' ), true, 'has property' );

	betaprime = new BetaPrime( 3.0, 5.0 );
	t.strictEqual( betaprime.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var betaprime;
	var y;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( BetaPrime.prototype.cdf ), true, 'has method' );

	betaprime = new BetaPrime();
	y = betaprime.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var betaprime;
	var y;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( BetaPrime.prototype.logcdf ), true, 'has method' );

	betaprime = new BetaPrime();
	y = betaprime.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var betaprime;
	var y;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( BetaPrime.prototype.logpdf ), true, 'has method' );

	betaprime = new BetaPrime();
	y = betaprime.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var betaprime;
	var y;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( BetaPrime.prototype.pdf ), true, 'has method' );

	betaprime = new BetaPrime();
	y = betaprime.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var betaprime;
	var y;

	t.strictEqual( hasOwnProp( BetaPrime.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( BetaPrime.prototype.quantile ), true, 'has method' );

	betaprime = new BetaPrime();
	y = betaprime.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});
