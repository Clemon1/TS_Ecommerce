import { Schema, model, Types } from "mongoose";

type productTypes = {
  title: string;
  image: string;
  otherPhoto: [string];
  description: string;
  category: Types.ObjectId;
  price: number;
  quantity: number;
};

const productSchema = new Schema<productTypes>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    otherPhoto: [{ type: String, required: true }],
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "category" },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const product = model("products", productSchema);
export default product;
