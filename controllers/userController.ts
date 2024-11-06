import {userModel} from "../models/userModel";

const getUserByEmailIdAndPassword = (email: string, password: string) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id:any) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user: any, password: string) {
  return user.password === password;
}

const createUser = (name: string, gitHubId: number) => {
  let user = userModel.createUser(name, gitHubId);
  if (user) {
    return user;
  }
  return null;
}

const getUserByGitHubId = (gitHubId: number) => {
  try {
      const user = userModel.findByGitHubId(gitHubId);
      return user || null;
  } catch (error) {
      return null; 
  }
};

export {
  getUserByEmailIdAndPassword,
  getUserById,
  getUserByGitHubId,
  createUser
};
