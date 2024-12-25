import { Schema, model, Document, Types } from "mongoose";

type productTypes = {
  title: string;
  image: string;
  otherPhoto: [string];
  description: string;
  category: Types.ObjectId;
  subCategory?: string;
  color?: [string];
  size?: [string];
  price: number;
  quantity: number;
};

const productSchema = new Schema<productTypes>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    otherPhoto: [{ type: String, required: true }],
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "categories" },
    subCategory: { type: String },
    color: [{ type: String }],
    size: [{ type: String }],
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const product = model<productTypes>("products", productSchema);
export default product;
