import { ipcMain } from "electron";

export const signup = () => {
  return ipcMain.on("signup", async (event, data) => {});
};
