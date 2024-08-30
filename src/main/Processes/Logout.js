import { ipcMain } from "electron";

export const logout = () => {
  return ipcMain.on("logout", async (event, data) => {});
};
