# render-glamorous

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Render a Glamorous React component as static html, useful for visual regression tests.

Originally built for use with [component-image](https://github.com/corygibbons/component-image).

## Usage

`npm install render-glamorous component-image --save-dev`

```js
import { generateImage } from 'component-image';
import renderGlamorous from 'render-glamorous';
import MyComponent from './components/my-component';

generateImage(MyComponent, {
  renderer: renderGlamorous,
}).then(image => {
  // do something
});
```

[build-badge]: https://img.shields.io/travis/penx/render-glamorous/master.png?style=flat-square
[build]: https://travis-ci.org/penx/render-glamorous

[npm-badge]: https://img.shields.io/npm/v/render-glamorous.png?style=flat-square
[npm]: https://www.npmjs.org/package/render-glamorous

[coveralls-badge]: https://img.shields.io/coveralls/penx/render-glamorous/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/penx/render-glamorous
