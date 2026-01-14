'use server'

import { collection, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache"; 



export const createProduct = async (formData) => {
  try {
    const products = await dbConnect(collection.PRODUCTS);
    

    const productData = {
      title: formData.title,
      image: formData.image,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock), 
      description: formData.description,
      createdAt: new Date(),
    };

    const result = await products.insertOne(productData);

    revalidatePath("/products");
    
    return { success: true, id: result.insertedId.toString() };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Failed to create product" };
  }
};