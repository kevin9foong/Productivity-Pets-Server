import User from '../model/user';
export interface IUserDto {
  googleId: string;
  name: string;
  avatar?: string;
}

export const createUser = (user: IUserDto) => {
  const userModel = new User({
    googleId: user.googleId,
    name: user.name,
    avatar: user.avatar
  });

  return userModel.save();
};
