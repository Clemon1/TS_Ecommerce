import { Schema, model } from "mongoose";

type categoriesType = {
  title: string;
  image: string;
  subCategory: [
    {
      image: string;
      title: string;
    },
  ];
};

const categorySchema = new Schema<categoriesType>(
  {
    title: {
      type: String,
      required: true,
    },
    image: String,
    subCategory: [
      {
        image: String,
        title: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const categories = model<categoriesType>("categories", categorySchema);

export default categories;
