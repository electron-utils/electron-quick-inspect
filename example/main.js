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

