'use server'


import { collection, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collection.PRODUCTS)
    .find()
    .sort({rating : -1})
    .limit(10)
    .toArray();

  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }));
  
};


export const getAllProducts = async () => {
  const products = await dbConnect(collection.PRODUCTS)
    .find()
    .toArray();

  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }));

};


export const getSingleProduct = async (id) => {
  if (!id || id.length !== 24) {
    return {};
  }

  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collection.PRODUCTS).findOne(query);

  if (!product) {
    return {};
  }

  return {
    ...product,
    _id: product._id.toString(),
  };
};
