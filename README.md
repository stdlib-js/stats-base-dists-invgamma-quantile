<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Inverse gamma][inverse-gamma] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for an [inverse gamma][inverse-gamma] random variable is

<!-- <equation class="equation" label="eq:invgamma_quantile_function" align="center" raw="Q(p;\alpha,\beta) = \frac{\beta \, \Gamma(\alpha)}{\Gamma(\alpha, p)}" alt="Quantile function for an inverse gamma distribution."> -->

```math
Q(p;\alpha,\beta) = \frac{\beta \, \Gamma(\alpha)}{\Gamma(\alpha, p)}
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;\alpha,\beta) = \frac{\beta \, \Gamma(\alpha)}{\Gamma(\alpha, p)}" data-equation="eq:invgamma_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/invgamma/quantile/docs/img/equation_invgamma_quantile_function.svg" alt="Quantile function for an inverse gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p < 1`, where `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-invgamma-quantile
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-invgamma-quantile' );
```

#### quantile( p, alpha, beta )

Evaluates the [quantile function][quantile-function] for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = quantile( 0.8, 2.0, 1.0 );
// returns ~1.213

y = quantile( 0.5, 4.0, 2.0 );
// returns ~0.545
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1.0, 1.0 );
// returns NaN

y = quantile( -0.1, 1.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 1.0, -1.0 );
// returns NaN
```

#### quantile.factory( alpha, beta )

Returns a function for evaluating the [quantile function][quantile-function] of an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var myquantile = quantile.factory( 2.0, 2.0 );
var y = myquantile( 0.8 );
// returns ~2.426

y = myquantile( 0.4 );
// returns ~0.989
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var quantile = require( '@stdlib/stats-base-dists-invgamma-quantile' );

var alpha;
var beta;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = quantile( p, alpha, beta );
    console.log( 'p: %d, α: %d, β: %d, Q(p;α,β): %d', p.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-invgamma-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-invgamma-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-invgamma-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-invgamma-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-invgamma-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-invgamma-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-invgamma-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-invgamma-quantile/main/LICENSE

[inverse-gamma]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
