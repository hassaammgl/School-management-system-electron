import { ipcRenderer } from "electron";

export const api = {
  signup: async (data) => {
    return new Promise((resolve, reject) => {
      ipcRenderer.send("signup", data);
      ipcRenderer.on("signup-response", (event, res) => {
        if (res.success) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },
  login: async (data) => {
    return new Promise((resolve, reject) => {
      ipcRenderer.send("login", data);
      ipcRenderer.on("login-response", (event, res) => {
        if (res.success) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },
  check_login: async (token) => {
    console.log(token);

    return new Promise((resolve, reject) => {
      ipcRenderer.send("check-login", token);
      ipcRenderer.on("check-login-response", (event, res) => {
        if (res.success) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },
  logout: async (token) => {
    console.log("logout called");
    console.log(token);

    return new Promise((resolve, reject) => {
      ipcRenderer.send("logout", token);
      ipcRenderer.on("logout-response", (event, res) => {
        if (res.success) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },
};
