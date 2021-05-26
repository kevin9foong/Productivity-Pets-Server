import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  //   username: String,
  avatar: String
});

userSchema.methods.saveGoogleUser = function (googleProfile) {};

export const mapGoogleProfileToUser = (googleProfile) => {
  return {
    name: googleProfile.displayName,
    // username: username,
    avatar: googleProfile.image.url
  };
};

export default mongoose.model('User', userSchema);
