import { Schema, model, models } from "mongoose";

const communitySchema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  image: String,
  bio: String,

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],

  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  communities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

export const Community =
  models.Community || model("Community", communitySchema);
