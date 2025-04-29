import { contextBridge, ipcRenderer } from 'electron';

// Expose API to the renderer process
contextBridge.exposeInMainWorld('electron', {
    launchGame: () => ipcRenderer.send('launch-game'),
});
