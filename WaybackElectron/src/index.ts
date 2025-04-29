import { app, BrowserWindow, ipcMain } from 'electron';
import { execFile } from 'child_process';


declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
   app.quit();
}

const createWindow = (): void => {
   // Create the browser window.
   const mainWindow = new BrowserWindow({
      height: 1024,
      width: 1280,
      webPreferences: {
         preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
         contextIsolation: true
      },
      autoHideMenuBar: true,
      // kiosk: true
   });

   // and load the index.html of the app.
   mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

   // Open the DevTools.
   mainWindow.webContents.openDevTools();

   console.log('preload entry: ', MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', () => {
   // On OS X it's common to re-create a window in the app when the
   // dock icon is clicked and there are no other windows open.
   if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
   }
});

// Function to launch the game
const launchGame = () => {
   execFile("C:/Users/admin/Documents/Games/Deep Down - The Lost City of Atlantis/Final - Windows/launch.exe", (error) => {
      if (error) {
         console.error('Error launching game:', error);
      } else {
         console.log('Game launched successfully.');
      }
   });
};

// Listen for the "launch-game" event from renderer process
ipcMain.on('launch-game', () => {
   launchGame();
});
