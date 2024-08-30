import { ipcMain } from "electron";

export const login = () => {
  return ipcMain.on("login", async (event, data) => {});
};

export const checkLogin = () => {
  return ipcMain.on("login", async (event, data) => {});
};
