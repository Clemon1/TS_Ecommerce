import { Schema, model } from "mongoose";

type categoriesType = {
  name: string;
  children: string[];
};
