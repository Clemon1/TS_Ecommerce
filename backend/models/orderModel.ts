import { Schema, model, Types } from "mongoose";

type orderTypes = {
  userId: Types.ObjectId;
  items: [
    {
      productId: Types.ObjectId;
      productImage: string;
      productName: string;
      price: number;
      quantity: number;
      size?: string;
      color?: string;
    },
  ];
  totalPrice: number;
  shippingAddress: string;
  status: string;
};

const orderSchema = new Schema<orderTypes>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        productImage: { type: String },
        productName: { type: String },
        price: { type: Number },
        size: String,
        color: String,
        quantity: { type: Number, default: 1 },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "On-Delivery", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

const Orders = model<orderTypes>("orders", orderSchema);

export default Orders;
