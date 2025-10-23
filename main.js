const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "GreenSurf",
    backgroundColor: "#e8f5e9",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);