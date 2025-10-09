import mongoose, { Schema, Document } from "mongoose";

export interface IList extends Document {
  title: string;
  description?: string;
  createdBy: mongoose.Schema.Types.ObjectId;
}

const listSchema = new Schema<IList>(
  {
    title: { type: String, required: true },
    description: { type: String },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export const List = mongoose.model<IList>("List", listSchema);
