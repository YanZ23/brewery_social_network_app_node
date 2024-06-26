import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    dob: Date,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "OWNER"],
      default: "USER",},
    registerDate: { type: Date, default: Date.now },
    description: String,
    favs : [
      {
        beerId : { type: mongoose.Schema.Types.ObjectId,
        ref: 'beers'}
      }
  ],
  },
  { collection: "users" });

export default userSchema;