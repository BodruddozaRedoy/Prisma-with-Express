import { UserService } from "./user.service.js";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.status(201).json(result)
  } catch (error) {
    console.log(error);
  }
};
const getAllFromDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllFromDB();
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};

export const UserController = {
  createUser,
  getAllFromDB
};
