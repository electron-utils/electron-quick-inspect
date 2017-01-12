# electron-quick-inspect

[![Dependency Status](https://david-dm.org/electron-utils/electron-quick-inspect.svg)](https://david-dm.org/electron-utils/electron-quick-inspect)
[![devDependency Status](https://david-dm.org/electron-utils/electron-quick-inspect/dev-status.svg)](https://david-dm.org/electron-utils/electron-quick-inspect#info=devDependencies)

Quickly inspect an element at mouse position via `webContents.inspectElement(x,y)`.

<img src="https://cloud.githubusercontent.com/assets/174891/21878536/ef33094a-d8cd-11e6-9a54-f0c88fdf119d.png" width="200" />
<img src="https://cloud.githubusercontent.com/assets/174891/21878535/ef32a0ea-d8cd-11e6-8760-f42cf2e23ed8.png" width="200" />
<img src="https://cloud.githubusercontent.com/assets/174891/21878537/ef38c560-d8cd-11e6-9e50-5abc0909da32.png" width="200" />

## Why?

This is similar to Chrome's inspect element tools. You can achieve it by several ways such as:

  - open the devtools and click the icon ![devtools icon](https://cloud.githubusercontent.com/assets/174891/21879224/229b8c22-d8d2-11e6-8dbc-4179653e74d5.png)
  - open the devtools and press `ctrl/command + shift + c`
  - call `browserWindow.debugger.sendCommand('DevToolsAPI.enterInspectElementMode()')` in the main process when devtools opened.
  
But all these 3 methods needs you open the devtools first.

Sometimes I just want to check the element quickly regardless the devtools, and this is why this module become useful for me.

## Install

```bash
npm install --save electron-quick-inspect
```

## Run the example:

```bash
npm start example
```

## Usage

In your main process:

```javascript
const quickInspect = require('electron-quick-inspect');

quickInspect.inspect(browserWindow);
```

Even better, you can add a accelerator to quickly start it by registering a menu item:

```javascript
const {app, BrowserWindow, Menu, MenuItem} = require('electron');
const quickInspect = require('../index.js');

let win;

app.on('ready', function () {
  // win
  win = new BrowserWindow({
    center: true,
    width: 400,
    height: 600,
    x: 100,
    y: 100,
  });
  win.loadURL('file://' + __dirname + '/index.html');

  let appMenu = Menu.getApplicationMenu();
  appMenu.append(new MenuItem({
    label: 'Develop',
    submenu: Menu.buildFromTemplate([
      {
        label: 'Inspet Element',
        accelerator: 'CmdOrCtrl+Shift+C',
        click () {
          let focusedWin = BrowserWindow.getFocusedWindow();
          quickInspect.inspect(focusedWin);
        }
      }
    ])
  }));

  Menu.setApplicationMenu(appMenu);
});
```

## License

MIT © 2017 Johnny Wu
