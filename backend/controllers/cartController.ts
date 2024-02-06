import { Request, Response } from "express";

import cart from "../models/cartModel";
import product from "../models/productModel";

// get user cart information
export const getUserCart = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    if (!currentUser) throw new Error("User not found");
    const userCart = await cart
      .findOne({ userId: currentUser })
      .populate("product.productId")
      .exec();

    res.status(200).json(userCart);
  } catch (err: any) {
    res.status(500).json(err && err.message);
  }
};

// get user cart information
export const addToCart = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    const { productId } = req.params;
    const productItem = await product.findById(productId);
    if (!productItem) throw new Error("Product not found");
    let userCart = await cart
      .findOne({ userId: currentUser })
      .populate("product.productId")
      .exec();
    // if not cart is found a new cart will be set
    if (!userCart) {
      userCart = new cart({
        userId: currentUser,
        product: [],
        totalPrice: 0,
      });
    }
    const cartIndex = userCart?.product.findIndex(
      (p) => p.productId._id.toString() === productId,
    );
    console.log(cartIndex);
    // check if product is already in cart
    if (cartIndex !== -1) {
      userCart.product[cartIndex].quantity += 1;
      await userCart.save();
      return res.status(200).json("Item quantity increased");
    } else {
      userCart?.product.push({
        productId: productItem._id,
        quantity: 1,
      });

      await userCart.save();
      return res.status(200).json("Added to cart");
    }
  } catch (err: any) {
    res.status(500).json(err && err.message);
  }
};

// get user cart information
export const increaseCartQuantity = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

// get user cart information
export const decreaseCartQuantity = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

//
export const removeCartItems = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
