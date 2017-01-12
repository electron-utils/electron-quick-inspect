# electron-quick-inspect

[![Dependency Status](https://david-dm.org/electron-utils/electron-quick-inspect.svg)](https://david-dm.org/electron-utils/electron-quick-inspect)
[![devDependency Status](https://david-dm.org/electron-utils/electron-quick-inspect/dev-status.svg)](https://david-dm.org/electron-utils/electron-quick-inspect#info=devDependencies)

Quickly inspect an element at mouse position via `webContents.inspectElement(x,y)`.

## Install

```bash
npm install --save electron-quick-inspect
```

## Usage

```javascript
const quickInspect = require('electron-quick-inspect');

quickInspect.inspect(browserWindow);
```

## License

MIT © 2017 Johnny Wu
