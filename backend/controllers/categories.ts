import { Request, Response } from "express";
import categories from "../models/categories";
import product from "../models/productModel";

// Get all categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await categories.find();
    res.status(200).send(allCategories);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Get products from categories and subcategories
export const getProductCategories = async (req: Request, res: Response) => {
  try {
    const { category, subcategory } = req.query;
    const products = await product.find({ category, subCategory: subcategory });
    res.status(200).json(products);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Get categories single categories
export const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const singlCategory = await categories.findById(id);
    res.status(200).send(singlCategory);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// create category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const image = req.file?.path;

    const newCategory = new categories({
      title,
      image,
    });
    const newCart = await newCategory.save();
    res.status(200).json(newCart);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// add subcategory to the existing category
export const addSubCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const { title } = req.body;
    const image: any = req.file?.path;

    const existingCategory = await categories.findById(categoryId);
    //check if category exists
    if (!existingCategory) {
      return res.status(401).json("Category not found");
    }
    existingCategory?.subCategory.push({
      image,
      title,
    });
    await existingCategory?.save();
    res.status(200).json(existingCategory);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
