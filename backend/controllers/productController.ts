import { Request, Response } from "express";
import product from "../models/productModel";
import users from "../models/userModel";

// All products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const getProduct = await product.find({});
    res.status(200).json(getProduct);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Get single product
export const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getProduct = await product.findById(id);
    res.status(200).json(getProduct);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// create product
export const createProducts = async (req: Request, res: Response) => {
  try {
    const { title, description, category, price, quantity } = req.body;
    //@ts-ignore
    const image = req.files["image"][0] && req.files["image"][0].path;

    const otherPhoto =
      //@ts-ignore
      req.files["otherPhoto"] &&
      //@ts-ignore
      req.files["otherPhoto"].map((file: string) => file.path);

    const newProduct = new product({
      title,
      image,
      otherPhoto,
      description,
      category,
      price,
      quantity,
    });
    const newProd = await newProduct.save();
    res.status(201).json(newProd);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Add to product users wishlist
export const wishlistProducts = async (req: Request, res: Response) => {
  try {
    const userId = req.user;
    const { productId } = req.params;
    if (!userId) throw new Error("User ID not found");
    if (!productId) throw new Error("Product not found");

    const currentUser = await users.findById(userId);
    const currentProduct = await product.findById(productId);
    // check if user exist on database
    if (!currentUser) throw new Error("User not found");
    // check if product exist on database
    if (!currentProduct) throw new Error("Product not found");
    // checking if item exists on current user wishlist
    if (currentUser.wishlist.includes(currentProduct._id)) {
      await users.findByIdAndUpdate(req.user, {
        $pull: { wishlist: currentProduct._id },
      });
      return res.status(200).json("Item removed from wishlist");
    } else {
      // if item does not exists it will be added on current user wishlist
      await users.findByIdAndUpdate(req.user, {
        $push: { wishlist: currentProduct._id },
      });
      return res.status(200).json("Item added from wishlist");
    }
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

//update a product details
export const updateProducts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateProduct = await product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true },
    );

    res.status(200).json(updateProduct);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

//dlete a product
export const deleteProducts = async (req: Request, res: Response) => {
  try {
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};