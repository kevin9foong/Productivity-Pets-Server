import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  name: string;
  avatar?: string;
}

const userSchema: Schema = new Schema({
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

const User: Model<IUser> = mongoose.model('User', userSchema);
export default User;
