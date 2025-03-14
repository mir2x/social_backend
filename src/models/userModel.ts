import { Schema, model, Types, Document } from "mongoose";

export type DecodedUser = {
  authId: string;
  userId: string;
  userName: string;
  email: string;
  isVerified: boolean;
};

export type UserSchema = Document & {
  auth: Types.ObjectId;
  name: string;
  userName: string;
  mobileNumber: string;
  dateOfBirth: string;
  gender: string;
  photo: string[];
  distancePreference: number;
  school: {
    name: string;
    year: number | null;
  };
  height: {
    feet: number;
    inch: number;
  };
  expectation: string;
  relationshipStatus: string;
  race: string;
  interests: string[];
  hairColor: string;
  profession: string;
  bio: string;
};

const userSchema = new Schema(
  {
    auth: { type: Schema.Types.ObjectId, ref: "Auth", required: true },
    name: { type: String, required: true },
    userName: { type: String },
    mobileNumber: { type: Number, required: true },
    dateOfBirth: { type: String },
    gender: { type: String },
    photo: [{ type: String }],
    distancePreference: { type: Number },
    school: {
      name: { type: String, default: "" },
      year: { type: Number, default: null }
    },
    height: {
      feet: { type: Number },
      inch: { type: Number }
    },
    expectation: { type: String },
    relationshipStatus: { type: String, default: "" },
    race: { type: String, default: "" },
    interests: [{ type: String }],
    hairColor: { type: String, default: "" },
    profession: { type: String, default: "" },
    bio: { type: String, default: "" }
  },
  {
    timestamps: true
  }
);

export const User = model<UserSchema>("User", userSchema);
export default User;
