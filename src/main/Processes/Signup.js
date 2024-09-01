import { ipcMain } from "electron";
import { Admin, connectDb } from "../../database";

export const signup = () => {
  return ipcMain.on("signup", async (event, data) => {
    await connectDb();
    const {
      name,
      email,
      password,
      dob,
      gender,
      phoneNumber,
      role,
      age,
    } = data;
    const isSuperAdminExist = await Admin.findOne({
      $where: "this.role == 'super-admin'",
    });

  });
};
