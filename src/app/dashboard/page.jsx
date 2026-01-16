import React from 'react';
import CartPage from '../cart/page';
import AddNewItem from './add-new-item/page';
export const metadata = {
  title: "Dashboard",
  
};

const page = () => {
    return (
        <div>
            <AddNewItem></AddNewItem>
        </div>
    );
};

export default page;