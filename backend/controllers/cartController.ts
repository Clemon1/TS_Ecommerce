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
    //@ts-ignore
    const price = userCart?.product.flatMap(
      //@ts-ignore
      (p) => p.productId.price * p.quantity,
    );
    const totalPrice = price?.reduce((sum, acc) => sum + acc, 0);

    console.log("prices", price);

    console.log("total", totalPrice);

    res.status(200).json({ userCart, totalPrice });
  } catch (err: any) {
    res.status(500).json(err && err.message);
  }
};

// Add product to cart
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

      if (userCart.product[cartIndex].quantity > productItem.quantity) {
        return res
          .status(401)
          .json("Cart quanity cannot be above product item quantity");
      }
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

// Increase cart quantity
export const increaseCartQuantity = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    const { productId } = req.params;
    const productItem = await product.findById(productId);
    if (!productItem) return res.status(401).json("Product not found");
    let userCart = await cart.findOne({ userId: currentUser });
    if (!userCart) return res.status(401).json("No cart found");

    // Find the cart item with the matching product ID
    const cartItem = userCart.product.find(
      (item) => item.productId.toString() === productId,
    );
    console.log(cartItem);

    if (!cartItem) return res.status(401).json("Cart product not found");
    cartItem.quantity += 1;
    if (cartItem.quantity > productItem.quantity) {
      return res
        .status(401)
        .json("Cart quanity cannot be above product item quantity");
    }

    await userCart.save();
    res.status(200).json(userCart);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Decrease cart quantity
export const decreaseCartQuantity = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    const { productId } = req.params;
    const productItem = await product.findById(productId);
    if (!productItem) return res.status(401).json("Product not found");
    let userCart = await cart.findOne({ userId: currentUser });
    if (!userCart) return res.status(401).json("No cart found");

    // Find the cart item with the matching product ID
    const cartItem = userCart.product.find(
      (item) => item.productId.toString() === productId,
    );
    if (!cartItem) return res.status(401).json("Cart product not found");
    cartItem.quantity -= 1;
    // If the cart item quantity is less than 1 stop the decrease function
    if (cartItem.quantity <= 0) {
      return res.status(401).json("Cart quantity cannot be a negative number");
    }

    await userCart.save();
    res.status(200).json(userCart);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Remove item from user cart
export const removeCartItems = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    const { productId } = req.params;
    const productItem = await product.findById(productId);
    if (!productItem) return res.status(401).json("Product not found");
    let userCart = await cart.findOne({ userId: currentUser });
    if (!userCart) return res.status(401).json("No cart found");

    // Find the cart item with the matching product ID
    const cartItem = userCart.product.findIndex(
      (item) => item.productId.toString() === productId,
    );
    // Check if product exist inside the cart
    if (cartItem === -1) {
      return res.status(404).json({ error: "Product not found in the cart" });
    }
    // remove item from the cart
    userCart.product.splice(cartItem, 1);

    await userCart.save();
    res.status(200).json(userCart);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
