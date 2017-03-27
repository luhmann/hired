// Copyright 2004-present Facebook. All Rights Reserved.

const tsc = require('typescript');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
          "target": "es5",
          "lib": ["es6", "dom"],
          "experimentalDecorators": true
        },
        path,
        []
      );
    }
    return src;
  },
};
