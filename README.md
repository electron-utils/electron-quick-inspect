# electron-quick-inspect

[![Dependency Status](https://david-dm.org/electron-utils/electron-quick-inspect.svg)](https://david-dm.org/electron-utils/electron-quick-inspect)
[![devDependency Status](https://david-dm.org/electron-utils/electron-quick-inspect/dev-status.svg)](https://david-dm.org/electron-utils/electron-quick-inspect#info=devDependencies)

Quickly inspect an element at mouse position via `webContents.inspectElement(x,y)`.

![screen shot](https://cloud.githubusercontent.com/assets/174891/21878433/493fd2a2-d8cd-11e6-9087-8b3aee186c5d.png)

## Install

```bash
npm install --save electron-quick-inspect
```

## Run the example:

```bash
npm start example
```

## Usage

```javascript
const quickInspect = require('electron-quick-inspect');

quickInspect.inspect(browserWindow);
```

## License

MIT © 2017 Johnny Wu
