import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { UserDocument } from '../@types';

// declare your schema
export const userSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    walletAddress: { type: String, default: null },
    pushCount: { type: Number, default: 0 },
    pullRequestOpenCount: { type: Number, default: 0 },
    pullRequestCloseCount: { type: Number, default: 0 },
    reward: { type: Number, default: 0 },
  },
  { timestamps: true },
);

// paginate with this plugin

// create the paginated model
userSchema.plugin(paginate);

// create the paginated model
export const Users = mongoose.model<UserDocument, mongoose.PaginateModel<UserDocument>>('Users', userSchema, 'users');
