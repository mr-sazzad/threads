import { Schema, model, models } from "mongoose";

const useModel = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  image: String,
  bio: String,

  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],

  onboarded: {
    type: Boolean,
    default: false,
  },

  communities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

export const User = models.User || model("User", useModel);
