import User from '../model/user';
import { IUserDto } from './usertypes';

export const createUser = (user: IUserDto) => {
  const userModel = new User({
    googleId: user.googleId,
    name: user.name,
    avatar: user.avatar
  });

  return userModel.save();
};
