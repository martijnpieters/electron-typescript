/// <reference path="../../typings/index.d.ts" />
import electron = require('electron');
const app = electron.app;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  mainWindow = new electron.BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/../index.html`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
});
