# electron-quick-inspect

[![Dependency Status](https://david-dm.org/electron-utils/electron-quick-inspect.svg)](https://david-dm.org/electron-utils/electron-quick-inspect)
[![devDependency Status](https://david-dm.org/electron-utils/electron-quick-inspect/dev-status.svg)](https://david-dm.org/electron-utils/electron-quick-inspect#info=devDependencies)

Quickly inspect an element at mouse position via `webContents.inspectElement(x,y)`.

![screen shot 01](https://cloud.githubusercontent.com/assets/174891/21878536/ef33094a-d8cd-11e6-9a54-f0c88fdf119d.png)
![screen shot 02](https://cloud.githubusercontent.com/assets/174891/21878535/ef32a0ea-d8cd-11e6-8760-f42cf2e23ed8.png)
![screen shot 03](https://cloud.githubusercontent.com/assets/174891/21878537/ef38c560-d8cd-11e6-9e50-5abc0909da32.png)

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
