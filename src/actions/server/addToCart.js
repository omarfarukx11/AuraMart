'use server'

import { collection, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache"; 
import { ObjectId } from "mongodb"; 

/**
 * 1. Add item to cart or increment quantity if it exists
 */
export const addItemToUserCart = async (userEmail, product) => {
  try {
    const cartCollection = await dbConnect(collection.CARTS); 

    // Convert string ID to MongoDB ObjectId
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

    // Refresh the cart page data
    revalidatePath("/cart"); 
    return { success: true };
  } catch (error) {
    console.error("Cart Error:", error);
    return { success: false, error: error.message }; 
  }
};

/**
 * 2. Get all cart items for a specific user
 */
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

/**
 * 3. Get total quantity count for the Navbar badge
 */
export const getCartCount = async (userEmail) => {
  try {
    const cartCollection = await dbConnect(collection.CARTS);
    const items = await cartCollection.find({ userEmail }).toArray();
    return items.reduce((acc, item) => acc + (item.quantity || 0), 0);
  } catch (error) {
    console.error("Count Error:", error);
    return 0;
  }
};