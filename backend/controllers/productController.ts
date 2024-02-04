import { Request, Response } from "express";
import product from "../models/productModel";

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

//update a product
export const updateProducts = async (req: Request, res: Response) => {
  try {
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
