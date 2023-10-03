// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-kurtosis@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-mean@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-mode@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-skewness@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-stdev@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-variance@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-cdf@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-logcdf@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-logpdf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-pdf@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-quantile@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function u(){var s,e;if(!(this instanceof u))return 0===arguments.length?new u:new u(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(j("0vT8i,HW",s));if(!i(e))throw new TypeError(j("0vT8j,HX",e))}else s=1,e=1;return t(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(j("0vT8k,HE",t));s=t}}),t(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(j("0vT8k,HE",t));e=t}}),this}e(u.prototype,"kurtosis",(function(){return r(this.alpha,this.beta)})),e(u.prototype,"mean",(function(){return n(this.alpha,this.beta)})),e(u.prototype,"mode",(function(){return o(this.alpha,this.beta)})),e(u.prototype,"skewness",(function(){return d(this.alpha,this.beta)})),e(u.prototype,"stdev",(function(){return p(this.alpha,this.beta)})),e(u.prototype,"variance",(function(){return a(this.alpha,this.beta)})),s(u.prototype,"cdf",(function(t){return m(t,this.alpha,this.beta)})),s(u.prototype,"logcdf",(function(t){return h(t,this.alpha,this.beta)})),s(u.prototype,"logpdf",(function(t){return l(t,this.alpha,this.beta)})),s(u.prototype,"pdf",(function(t){return b(t,this.alpha,this.beta)})),s(u.prototype,"quantile",(function(t){return f(t,this.alpha,this.beta)}));export{u as default};
//# sourceMappingURL=index.mjs.map
