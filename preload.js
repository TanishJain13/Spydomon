const { contextBridge, ipcRenderer } = require('electron');

const api = {
  addReminder: (message, seconds) => ipcRenderer.invoke('add-reminder', { message, seconds }),
  cancelReminder: (id) => ipcRenderer.invoke('cancel-reminder', { id }),
  triggerImmediate: (message) => ipcRenderer.invoke('trigger-immediate', { message }),
  getReminders: () => ipcRenderer.invoke('get-reminders'),
  onRemindersUpdated: (callback) => {
    ipcRenderer.on('reminders-updated', (event, payload) => callback(payload));
  },
  onPlayDrop: (callback) => {
    ipcRenderer.on('play-drop', (event, message) => callback(message));
  },
  dismissOverlay: () => ipcRenderer.send('overlay-dismissed')
};

contextBridge.exposeInMainWorld('spydomon', api);
contextBridge.exposeInMainWorld('spydy', api);
