import { Request, Response } from "express";
import Orders from "../models/orderModel";
import cart from "../models/cartModel";

// get all orders
export const getAllOrder = async (req: Request, res: Response) => {
  try {
    const allOrders = await Orders.find({});
    res.status(200).json(allOrders);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

//get users order
export const getUserOrder = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const userOrders = await Orders.find({ userId: user });
    res.status(200).json(userOrders);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

//get single order

export const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const singleOrder = await Orders.findById(id);
    res.status(200).json(singleOrder);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json("No user found");
    const userCart = await cart.findOne({ userId: user });
    const {
      productId,
      productImage,
      productName,
      price,
      quantity,
      totalPrice,
      shippingAddress,
    } = req.body;

    const order = new Orders({
      userId: user,
      items: [
        {
          productId,
          productImage,
          productName,
          price,
          quantity,
        },
      ],
      totalPrice,
      shippingAddress,
    });
    const savedOrder = await order.save();
    if (userCart) {
      //@ts-ignore
      userCart.product = [];
      await userCart.save();
    }
    res.status(201).json(savedOrder);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// update order status
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateStatus = await Orders.findByIdAndUpdate(id, {
      $set: { status: req.body },
    });
    res.status(200).json(updateStatus);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
