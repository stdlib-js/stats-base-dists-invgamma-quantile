"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(O,c){
var f=require('@stdlib/math-base-special-gammaincinv/dist'),t=require('@stdlib/math-base-assert-is-nan/dist');function N(e,r,n){return t(r)||t(n)||t(e)||r<=0||n<=0||e<0||e>1?NaN:n/f(e,r,!0)}c.exports=N
});var q=a(function(R,o){
var m=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/math-base-special-gammaincinv/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function x(e,r){if(u(e)||u(r)||e<=0||r<=0)return m(NaN);return n;function n(i){return u(i)||i<0||i>1?NaN:r/y(i,e,!0)}}o.exports=x
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=s(),d=q();g(v,"factory",d);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
