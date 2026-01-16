# AuraMart - Premium E-Commerce Marketplace

**AuraMart** is a modern, full-stack e-commerce platform designed to offer a seamless shopping experience similar to Amazon and Shopify. Built with a focus on speed, beautiful UI, and intuitive user flows, AuraMart allows users to browse products, manage a dynamic shopping cart, and checkout securely.

---

## Features

### **1. Professional User Experience**
* **Modern UI/UX:** Built with **Next.js 16** and **DaisyUI**, featuring a clean, responsive design for mobile and desktop.
* **Smooth Animations:** Utilizes **Framer Motion** for entrance animations and interactive transitions.
* **SweetAlert2 Toasts:** Replaced standard browser alerts with professional, non-blocking corner notifications for login, logout, and cart actions.

### **2. Advanced Shopping Cart**
* **Real-time Updates:** A custom event-driven system (`cartUpdate`) ensures the navbar cart count and totals update instantly without page refreshes.
* **Quantity Management:** Interactive buttons to increase, decrease, or remove items directly within the cart.
* **Database Persistence:** Cart data is stored in **MongoDB**, allowing users to access their saved items across different devices.

### **3. Secure Authentication**
* **Next-Auth & Cookies:** Hybrid authentication using **NextAuth** for secure sessions and `js-cookie` for client-side state management.
* **Protected Routes:** Higher-order logic prevents unauthenticated users from accessing the cart or checkout pages.
* **Social Login:** Integrated Google and Facebook authentication options.

### **4. Technical Excellence**
* **Server Actions:** Efficient data fetching and mutations using Next.js Server Actions.
* **Dark Mode Support:** Fully compatible with system dark/light preferences.

---

 ### Tech Stack & Dependencies
*Database*: MongoDB (via official mongodb driver)
*Styling*: Tailwind CSS + DaisyUI
*Icons*: React Icons (Fa, Fi)
*State & Logic*: Framer Motion, js-cookie, SweetAlert2
*Backend*: Express (Internal logic)

### Route,Type,Description
 * /            Public     Homepage with featured products and categories.
 * /products    Public     All products catalog with search and filters.
 * /login       Public     User authentication with redirect logic.
 * /cart        Private    User shopping cart (Requires Auth).
 * /about       Public     about auramart
 * /contact     Public     Contact form with SweetAlert corner feedback.
 * /dashboard   dashboard  Private,User profile and order management.



## Setup & Installation

### **Prerequisites**
* Node.js (v18.0.0 or higher)
* MongoDB Atlas account

### **Installation Steps**

1. **Clone the project:**
   ```bash
   git clone https://github.com/omarfarukx11/AuraMart.git
   cd auramart
2 . **Install dependencies:**
    npm install 
