import { Schema, model, Types } from "mongoose";

type cartTypes = {
  userId: Types.ObjectId;
  product: [
    {
      productId: Types.ObjectId;
      productImage: string;
      price: number;
      quantity: number;
    },
  ];
  totalPrice: number;
};

const cartSchema = new Schema<cartTypes>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    product: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        productImage: { type: String },
        price: { type: Number },
        quantity: { type: Number, default: 1 },
      },
    ],
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const cart = model("cart", cartSchema);
export default cart;
