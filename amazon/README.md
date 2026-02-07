# Amazon-Style MVP Web Application

A fully functional Amazon-style e-commerce web application built with **React.js only** (frontend-only). This is a complete UI/UX MVP that mimics the Amazon mobile app experience without any backend or database.

![Amazon MVP](https://img.shields.io/badge/React-18.2.0-blue) ![React Router](https://img.shields.io/badge/React_Router-6.8.0-red) ![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Features

### ✅ Authentication (Mock)
- **Login & Signup Pages** - Accepts any email/password combination
- **Session Management** - Login state stored in localStorage
- **Protected Routes** - Automatic redirect after login/logout

### 🏠 Home Page
- **Amazon-style Header** with logo, search bar, and cart icon with item count
- **Horizontal Category Strip** - Scrollable categories (Pay, Fresh, Bazaar, MX Player, Pharmacy, Electronics, etc.)
- **Product Grid** - Responsive grid layout with 27+ sample products
- **Client-side Search** - Real-time product filtering
- **Category Filtering** - Filter products by selected category

### 📦 Products
- **27+ Sample Products** across multiple categories:
  - Electronics (Smartphones, Earbuds, Laptops, Cameras)
  - Groceries (Tea, Oil, Noodles, Butter, Cookies)
  - Fresh (Fruits, Vegetables, Milk)
  - Pharmacy (Antiseptic, Face Wash, Medicines, Band-aids)
  - Fashion (Jeans, T-Shirts, Shoes, Watches)
  - Home & Kitchen (Pressure Cooker, Water Bottles, Induction)
- Product images from Unsplash (placeholder images)
- Product ratings and reviews count
- **Add to Cart** functionality with animations

### 🛒 Shopping Cart
- Add/Remove items from cart
- Quantity management (1-10 items per product)
- Real-time price calculation
- Cart state persisted in localStorage
- Empty cart state with call-to-action
- Delivery fee calculation (Free above ₹499)

### 📍 Address Management
- **Amazon-style Address Form** with validation:
  - Full Name
  - Mobile Number (10-digit validation)
  - Pincode (6-digit validation)
  - House/Flat Number
  - Area/Street
  - Landmark (optional)
  - City
  - State (dropdown with all Indian states)
- Form validation with error messages
- Address saved to localStorage

### 💳 Checkout Process
- Order review page with:
  - Delivery address display
  - Order items summary
  - Payment method selection (COD, UPI, Card)
  - Price breakdown (Subtotal, Delivery Fee, Total)
- **Dummy Payment Flow** (no real payment gateway)
- Order placement with loading animation

### ✅ Order Success
- **Beautiful success animation** with checkmark
- Order confirmation with:
  - Order ID (auto-generated)
  - Order date and time
  - Total amount
  - Payment method
  - Delivery address
  - Items ordered preview
- Order saved to localStorage for history

### 📱 Bottom Navigation (Mobile-Style)
- Fixed bottom navigation bar (Amazon-style)
- 6 Navigation items:
  - **Home** - Product listing
  - **You** - Profile/Account
  - **Wallet** - Amazon Pay
  - **Cart** - Shopping cart
  - **Menu** - Categories menu
  - **Chatbot** - Customer support
- Active state highlighting
- Persistent across all pages

### 🤖 Chatbot (Demo)
- **Rule-based chatbot** with predefined responses
- Topics covered:
  - Order tracking
  - Returns & refunds
  - Payment help
  - Delivery information
  - General support
- Quick reply buttons
- Real-time chat interface with typing indicator
- Chat message history

### 👤 Profile/You Section
- User information display
- Recent orders view (last 3 orders)
- Account menu with options:
  - Your Orders
  - Your Addresses
  - Your Wishlist
  - Payment Methods
  - Amazon Pay
  - Customer Service
  - Settings
- Logout functionality

### 💰 Amazon Pay Wallet (Demo)
- Balance display (₹1,201 demo balance)
- Transaction history
- Quick action buttons (UPI, Cards, Bank Transfer, Statements)
- Beautiful gradient card design

### 📋 Menu Page
- User profile section
- **Shop by Category** (8 categories)
- **Programs & Features** (6 items)
- **Help & Settings** (5 items)
- Organized navigation to all app sections

### 🎨 UI/UX Features
- **Mobile-first responsive design**
- **Smooth animations and transitions**
- **Loading indicators** for async operations
- **Toast notifications** for cart actions
- **Amazon-style color scheme** (#FF9900 primary, #232F3E dark)
- **Professional typography** and spacing
- **Touch-friendly buttons** and interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd amazon-mvp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - The app should automatically open

## 📱 Usage

### First Time Setup
1. Open the app in your browser
2. You'll see the **Login page**
3. Enter **any email and password** (e.g., `user@example.com` / `password123`)
4. Click **Sign in** - you'll see a loading animation
5. After login, you'll be redirected to the **Home page**

### Shopping Flow
1. **Browse Products** - Scroll through the product grid
2. **Search** - Use the search bar to find specific products
3. **Filter by Category** - Click on category icons in the strip
4. **Add to Cart** - Click "Add to Cart" on any product
5. **View Cart** - Click cart icon (top right) or "Cart" in bottom nav
6. **Manage Quantities** - Use +/- buttons to adjust quantities
7. **Proceed to Checkout** - Click the yellow button
8. **Add Address** - Fill in delivery details
9. **Review Order** - Check items, address, and payment method
10. **Place Order** - Complete the purchase (demo payment)
11. **Order Success** - View confirmation with order details

### Chat Support
1. Click **Chatbot** in bottom navigation
2. Type your question or use quick reply buttons
3. Get instant responses for common queries

### Account Management
1. Click **You** in bottom navigation
2. View recent orders
3. Access account settings
4. Logout when done

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **React Router DOM 6.8.0** - Routing
- **Context API** - State management (Auth & Cart)
- **localStorage** - Data persistence
- **CSS3** - Styling with custom animations
- **Unsplash API** - Product images

## 📂 Project Structure

```
amazon-mvp/
├── public/
│   └── index.html
├── src/
│   ├── assets/                 # Images and static files
│   ├── components/             # Reusable components
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── CategoryStrip.js
│   │   ├── CategoryStrip.css
│   │   ├── BottomNav.js
│   │   ├── BottomNav.css
│   │   ├── ProductCard.js
│   │   ├── ProductCard.css
│   │   ├── Loader.js
│   │   └── Loader.css
│   ├── context/                # Context providers
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   ├── data/                   # Static data
│   │   └── products.js
│   ├── pages/                  # Page components
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Signup.js
│   │   ├── Signup.css
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Cart.js
│   │   ├── Cart.css
│   │   ├── Address.js
│   │   ├── Address.css
│   │   ├── Checkout.js
│   │   ├── Checkout.css
│   │   ├── OrderSuccess.js
│   │   ├── OrderSuccess.css
│   │   ├── Profile.js
│   │   ├── Profile.css
│   │   ├── Wallet.js
│   │   ├── Wallet.css
│   │   ├── Menu.js
│   │   ├── Menu.css
│   │   ├── Chatbot.js
│   │   └── Chatbot.css
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styles
│   ├── index.js                # Entry point
│   └── index.css               # Root styles
├── package.json
├── .gitignore
└── README.md
```

## 🎨 Design Highlights

### Color Palette
- **Primary Orange:** `#FF9900`
- **Dark Navy:** `#232F3E`
- **Yellow/Gold:** `#FFD814`
- **Link Blue:** `#007185`
- **Error Red:** `#D13212`
- **Success Green:** `#067D62`

### Typography
- **Font Family:** System fonts (Apple/Segoe/Roboto)
- **Headings:** 600-700 weight
- **Body:** 400-500 weight

### Responsive Breakpoints
- **Mobile:** < 480px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 💾 Data Storage

All data is stored in browser's **localStorage**:
- `user` - User information
- `authToken` - Mock authentication token
- `cart` - Shopping cart items
- `deliveryAddress` - Saved delivery address
- `orders` - Order history

## 🔒 Security Notes

⚠️ **This is a demo application:**
- No real authentication/authorization
- No password encryption
- No secure data transmission
- localStorage is not secure for production
- Do not use for real e-commerce

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Demo Account

Use **any credentials** to login:
- Email: `demo@amazon.com`
- Password: `demo123`

Or create a new account with any email/password combination.

## 🐛 Known Limitations

1. **No backend** - All data is stored locally
2. **No real payment** - Payment flow is simulated
3. **No image uploads** - Product images are from Unsplash
4. **No user authentication** - Mock authentication only
5. **No email notifications** - Demo notifications only
6. **Cart clears on logout** - localStorage is cleared
7. **Single user session** - No multi-user support

## 🚀 Future Enhancements (If adding backend)

- Real authentication with JWT
- Database integration (MongoDB/PostgreSQL)
- Payment gateway integration (Stripe/Razorpay)
- Product image uploads
- Order tracking system
- Email notifications
- User reviews and ratings
- Wishlist functionality
- Product recommendations
- Admin dashboard

## 📄 License

This project is created for educational/demonstration purposes.

## 👨‍💻 Developer

Built with ❤️ as an Amazon-style MVP demonstration

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Inspired by Amazon's mobile app design
- Built with React.js and modern web technologies

---

## 📞 Support

For any questions or issues:
1. Check the **Chatbot** in the app for common queries
2. Review this README documentation
3. Check browser console for errors

---

**Note:** This is a frontend-only MVP application. All data is stored in browser's localStorage and will be cleared if you clear browser data or use incognito mode.

**Happy Shopping! 🛍️**