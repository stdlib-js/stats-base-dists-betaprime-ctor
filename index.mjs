// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-kurtosis@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-mean@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-mode@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-skewness@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-stdev@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-variance@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-cdf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-logcdf@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-logpdf@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-pdf@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-quantile@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function j(){var e,s;if(!(this instanceof j))return 0===arguments.length?new j:new j(arguments[0],arguments[1]);if(arguments.length){if(s=arguments[1],!i(e=arguments[0]))throw new TypeError(f("invalid argument. First shape parameter must be a positive number. Value: `%s`.",e));if(!i(s))throw new TypeError(f("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",s))}else e=1,s=1;return t(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(f("invalid assignment. Must be a positive number. Value: `%s`.",t));e=t}}),t(this,"beta",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(f("invalid assignment. Must be a positive number. Value: `%s`.",t));s=t}}),this}s(j.prototype,"kurtosis",(function(){return r(this.alpha,this.beta)})),s(j.prototype,"mean",(function(){return n(this.alpha,this.beta)})),s(j.prototype,"mode",(function(){return a(this.alpha,this.beta)})),s(j.prototype,"skewness",(function(){return o(this.alpha,this.beta)})),s(j.prototype,"stdev",(function(){return p(this.alpha,this.beta)})),s(j.prototype,"variance",(function(){return d(this.alpha,this.beta)})),e(j.prototype,"cdf",(function(t){return m(t,this.alpha,this.beta)})),e(j.prototype,"logcdf",(function(t){return h(t,this.alpha,this.beta)})),e(j.prototype,"logpdf",(function(t){return l(t,this.alpha,this.beta)})),e(j.prototype,"pdf",(function(t){return b(t,this.alpha,this.beta)})),e(j.prototype,"quantile",(function(t){return u(t,this.alpha,this.beta)}));export{j as default};
//# sourceMappingURL=index.mjs.map
