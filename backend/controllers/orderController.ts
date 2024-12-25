import { Request, Response } from "express";
import Orders from "../models/orderModel";
import cart from "../models/cartModel";
import product from "../models/productModel";
import mongoose from "mongoose";

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

// Create new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json("No user found");

    const userCart = await cart.findOne({ userId: user });

    const { items, totalPrice, shippingAddress } = req.body;

    // Validate and update stock for each product
    for (const item of items) {
      const { productId, quantity } = item;

      const productItem = await product.findById(productId);
      if (!productItem) {
        throw new Error(`Product with ID ${productId} not found`);
      }

      if (productItem.quantity < quantity) {
        throw new Error(
          `Insufficient stock for product ${productItem.title} (ID: ${productId})`,
        );
      }

      // Update product stock
      productItem.quantity -= quantity;
      await productItem.save();
    }

    // Create the order
    const order = new Orders({
      userId: user,
      items, // Use the items array directly from the request body
      totalPrice,
      shippingAddress,
    });

    const savedOrder = await order.save();

    // Clear user cart if it exists
    if (userCart) {
      //@ts-ignore
      userCart.product = [];
      await userCart.save();
    }

    res.status(201).json(savedOrder);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
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

// Paystack Payment

// Stripe Payment
