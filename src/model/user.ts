import { model, Schema } from 'mongoose';

export interface IUser {
  googleId: string;
  name: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  googleId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: String
});

const User = model('User', userSchema);
export default User;
