/* eslint-env node */

'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', function () {
	mainWindow = new BrowserWindow({
		frame: false,
		height: 600,
		skipTaskbar: true,
		resizeable: false,
		transparent: true,
		titleBarStyle: false,
		width: 614
	});

	mainWindow.loadURL('file://' + __dirname + '/dist/index.html');
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});