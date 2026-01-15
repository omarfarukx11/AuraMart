'use server'

import { collection, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache"; 
import { ObjectId } from "mongodb"; 


export const addItemToUserCart = async (userEmail, product) => {
  try {
    const cartCollection = await dbConnect(collection.CARTS); 

    const productId = new ObjectId(product._id);

    const result = await cartCollection.updateOne(
      { userEmail: userEmail, productId: productId }, 
      { 
        $setOnInsert: { 
            addedAt: new Date(),
            image: product.image,
            title: product.title 
        },
        $set: { 
            price: parseFloat(product.price),
            updatedAt: new Date()
        },
        $inc: { quantity: 1 } 
      }, 
      { upsert: true } 
    );

    revalidatePath("/cart"); 
    return { success: true };
  } catch (error) {
    console.error("Cart Error:", error);
    return { success: false, error: error.message }; 
  }
};

export const updateCartQuantity = async (userEmail, productId, change) => {
  try {
    const cartCollection = await dbConnect(collection.CARTS);
    const pId = new ObjectId(productId);

    await cartCollection.updateOne(
      { userEmail, productId: pId },
      { $inc: { quantity: change }, $set: { updatedAt: new Date() } }
    );

    revalidatePath("/cart");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// 2. Delete Item Completely
export const deleteCartItem = async (userEmail, productId) => {
  try {
    const cartCollection = await dbConnect(collection.CARTS);
    const pId = new ObjectId(productId);

    await cartCollection.deleteOne({ userEmail, productId: pId });

    revalidatePath("/cart");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getUserCart = async (userEmail) => {
    try {
        const cartCollection = await dbConnect(collection.CARTS);
        const items = await cartCollection.find({ userEmail: userEmail }).toArray();
        
        // Serialize for Next.js Client Components
        return JSON.parse(JSON.stringify(items));
    } catch (error) {
        console.error("Fetch Cart Error:", error);
        return [];
    }
};


export const getCartCount = async (userEmail) => {
  try {
    const cartCollection = await dbConnect(collection.CARTS);

    const items = await cartCollection.find({ userEmail }).toArray();

    return items.length; 
  } catch (error) {
    console.error("Count Error:", error);
    return 0;
  }
};

