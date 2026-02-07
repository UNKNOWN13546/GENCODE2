# Amazon MVP - Complete Setup Guide

## 🎉 Welcome!

You now have a fully functional Amazon-style e-commerce MVP built with React.js!

## 📋 Quick Start

### 1. Navigate to Project Directory
```bash
cd amazon-mvp
```

### 2. Install Dependencies (if not already done)
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

If it doesn't open automatically, manually navigate to: **http://localhost:3000**

---

## 🎯 First-Time User Guide

### Step 1: Login/Signup
- When you first open the app, you'll see the **Login page**
- Enter **any email and password** (e.g., `demo@amazon.com` / `password123`)
- Click **"Sign in"** - you'll see a loading animation
- Alternatively, click **"Create your Amazon account"** to signup

### Step 2: Explore the Home Page
- After login, you're redirected to the **Home page**
- You'll see:
  - **Header** with search bar and cart icon
  - **Category strip** with scrollable categories
  - **Product grid** with 27+ products

### Step 3: Shop for Products
- **Browse**: Scroll through the product grid
- **Search**: Use the search bar to find products
- **Filter**: Click category icons (Fresh, Electronics, etc.)
- **Add to Cart**: Click "Add to Cart" button on any product
- You'll see a toast notification confirming the item was added

### Step 4: View Your Cart
- Click the **cart icon** in the header (shows item count)
- Or click **"Cart"** in the bottom navigation
- In the cart you can:
  - Adjust quantities using +/- buttons
  - Remove items
  - See total price
  - Proceed to checkout

### Step 5: Add Delivery Address
- Click **"Proceed to Checkout"**
- Fill in the delivery address form:
  - Full Name
  - Mobile Number (10 digits)
  - Pincode (6 digits)
  - House/Flat Number
  - Area/Street
  - Landmark (optional)
  - City
  - State
- Click **"Use this address"**

### Step 6: Review & Place Order
- Review your order details:
  - Delivery address
  - Order items
  - Payment method (select COD, UPI, or Card)
  - Price breakdown
- Click **"Place Order"**
- Wait for the loading animation

### Step 7: Order Success!
- You'll see a beautiful success animation
- Order details are displayed:
  - Order ID
  - Order date & time
  - Total amount
  - Delivery address
  - Items ordered
- Click **"Continue Shopping"** to go back to home
- Or **"View Orders"** to see your profile

---

## 🧭 Navigation Guide

### Bottom Navigation Bar
The app has a fixed bottom navigation with 6 tabs:

1. **🏠 Home** - Product listing and shopping
2. **👤 You** - Profile, orders, and account settings
3. **💰 Wallet** - Amazon Pay balance and transactions
4. **🛒 Cart** - Your shopping cart
5. **📋 Menu** - Browse all categories and features
6. **💬 Chatbot** - Customer support assistant

---

## 🤖 Using the Chatbot

### How to Access
- Click **"Chatbot"** in the bottom navigation
- Or navigate via Menu → Customer Service

### What You Can Ask
The chatbot can help with:
- **Order Tracking**: "Track my order" or "Where is my order?"
- **Returns**: "Return policy" or "How to return?"
- **Payment**: "Payment help" or "Payment methods"
- **Delivery**: "Delivery info" or "Shipping time"
- **General Help**: "Help" or "Support"

### Quick Replies
Use the quick reply buttons for instant responses:
- Track my order
- Return policy
- Help with payment
- Delivery info

---

## 👤 Profile Features

### Accessing Your Profile
- Click **"You"** in bottom navigation

### What You Can Do
- View recent orders (last 3 orders shown)
- See your account information
- Access various sections:
  - Your Orders
  - Your Addresses
  - Your Wishlist
  - Payment Methods
  - Amazon Pay
  - Customer Service
  - Settings
- **Logout** from your account

---

## 💰 Wallet Features

### Amazon Pay
- View your current balance (₹1,201 demo balance)
- See recent transactions (credit/debit)
- Quick actions:
  - UPI Payment
  - Cards
  - Bank Transfer
  - Statements

**Note**: This is a demo wallet. No real money transactions.

---

## 📋 Menu Page

### Categories Available
**Shop by Category:**
- Electronics 📱
- Fashion 👗
- Home & Kitchen 🏠
- Beauty & Personal Care 💄
- Books 📚
- Sports & Fitness ⚽
- Toys & Games 🎮
- Automotive 🚗

**Programs & Features:**
- Amazon Pay 💳
- Gift Cards 🎁
- Amazon Prime 👑
- Subscribe & Save 🔄
- Today's Deals ⚡
- Sell on Amazon 🏪

**Help & Settings:**
- Your Account 👤
- Customer Service 🎧
- Wish List ❤️
- Your Orders 📦
- Settings ⚙️

---

## 🔍 Search & Filter

### Search Products
1. Click the search bar in the header
2. Type product name, category, or description
3. Results filter in real-time

### Filter by Category
1. Scroll the category strip below the header
2. Click any category (All, Pay, Fresh, Bazaar, etc.)
3. Products filter instantly

---

## 🛒 Cart Management

### Adding Items
- Click "Add to Cart" on any product card
- Item is added with quantity 1

### Managing Quantities
- Use **+** button to increase quantity (max 10)
- Use **-** button to decrease quantity (min 1)
- Quantities below 1 remove the item

### Removing Items
- Click **"Remove"** button on any cart item

### Price Calculation
- Subtotal: Sum of all items
- Delivery Fee: ₹40 (Free if order > ₹499)
- Total: Subtotal + Delivery Fee

---

## 📦 Order Management

### Placing Orders
1. Add items to cart
2. Proceed to checkout
3. Add delivery address
4. Select payment method
5. Review order details
6. Click "Place Order"

### Viewing Orders
1. Go to **"You"** tab
2. See recent orders section
3. Click "View All" for complete history
4. Each order shows:
   - Order ID
   - Status (Confirmed)
   - Number of items
   - Total amount
   - Item preview images

### Order Details
- Order ID (auto-generated)
- Order date & time
- Total amount
- Payment method
- Delivery address
- All items in the order

---

## 💾 Data Storage

### What is Stored
All data is stored in your browser's **localStorage**:
- User account information
- Authentication token (mock)
- Shopping cart items
- Delivery addresses
- Order history

### Important Notes
- Data persists between sessions
- **Data is cleared when you logout**
- Incognito mode won't save data
- Clearing browser data removes all information
- Each browser stores data separately

---

## 🎨 App Features Summary

### Authentication
✅ Login with any email/password
✅ Signup for new account
✅ Automatic redirect after login
✅ Session management
✅ Logout functionality

### Shopping
✅ 27+ products across 6 categories
✅ Product search
✅ Category filtering
✅ Product ratings & reviews count
✅ Add to cart with animations
✅ Cart management (add/remove/quantity)

### Checkout
✅ Address form with validation
✅ Order review page
✅ Multiple payment options
✅ Price breakdown
✅ Order placement with loading
✅ Order success confirmation

### User Experience
✅ Mobile-first responsive design
✅ Smooth animations & transitions
✅ Loading indicators
✅ Toast notifications
✅ Bottom navigation
✅ Amazon-style branding

### Additional Features
✅ Chatbot support
✅ Profile/Account page
✅ Amazon Pay wallet
✅ Menu with all categories
✅ Order history

---

## 🎯 Demo Credentials

### Login Options
Use **any** email and password combination:

**Option 1:**
- Email: `demo@amazon.com`
- Password: `demo123`

**Option 2:**
- Email: `user@example.com`
- Password: `password`

**Option 3:**
- Create new account with any email/password

---

## 📱 Mobile Experience

### Best Viewed On
- Mobile devices (iOS/Android)
- Tablet devices
- Desktop browsers (with mobile view)

### Testing on Mobile
1. Open browser on your phone
2. Navigate to your development server IP
   - Example: `http://192.168.1.100:3000`
3. Or use browser's mobile view (F12 → Device Toolbar)

### Responsive Breakpoints
- **Mobile**: < 480px (optimized)
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

---

## 🐛 Troubleshooting

### App Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port Already in Use
```bash
# Use different port
PORT=3001 npm start
```

### Page Not Loading
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

### Cart/Data Lost
- Data is stored in localStorage
- Don't use incognito mode
- Don't clear browser data
- Don't logout (clears cart)

### Images Not Loading
- Check internet connection
- Images are loaded from Unsplash
- Some images may be slow to load

---

## 🔧 Development Commands

### Start Development Server
```bash
npm start
```
Runs app at http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates optimized production build in `build/` folder

### Run Tests
```bash
npm test
```
Launches test runner

---

## 📂 Project Structure Overview

```
amazon-mvp/
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # State management (Auth & Cart)
│   ├── data/             # Static data (products)
│   ├── pages/            # Page components (routes)
│   ├── App.js            # Main app with routing
│   └── index.js          # Entry point
├── public/
│   └── index.html        # HTML template
├── package.json          # Dependencies
└── README.md             # Documentation
```

---

## 🎨 Customization Tips

### Changing Colors
Edit color variables in CSS files:
- Primary: `#FF9900` (Orange)
- Secondary: `#232F3E` (Navy)
- Accent: `#FFD814` (Yellow)

### Adding Products
Edit `src/data/products.js`:
```javascript
{
  id: 28,
  name: "New Product",
  category: "Electronics",
  price: 9999,
  image: "https://images.unsplash.com/...",
  description: "Product description",
  rating: 4.5,
  reviews: 100
}
```

### Adding Categories
Update `src/components/CategoryStrip.js`:
```javascript
{ id: 'newcat', name: 'New Category', icon: '🎁' }
```

---

## 🚀 Deployment

### Deploy to Netlify
1. Build the app: `npm run build`
2. Drag `build/` folder to Netlify
3. Or connect GitHub repo for auto-deploy

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/amazon-mvp"
npm run build
npm run deploy
```

---

## ⚠️ Important Notes

### This is a Demo App
- ❌ No real authentication
- ❌ No real payment processing
- ❌ No backend/database
- ❌ No real order fulfillment
- ❌ No email notifications
- ✅ Perfect for learning React
- ✅ Great portfolio project
- ✅ UI/UX demonstration

### Not for Production
This app is built for:
- Educational purposes
- Portfolio demonstration
- UI/UX showcase
- React.js learning
- Frontend practice

**Do NOT use for real e-commerce without:**
- Backend API
- Database
- Real authentication
- Payment gateway
- Security measures
- Legal compliance

---

## 📞 Getting Help

### Check These First
1. Read this SETUP_GUIDE.md
2. Check README.md for features
3. Use the in-app Chatbot
4. Check browser console for errors

### Common Questions

**Q: Why does my cart clear on logout?**
A: This is by design. The app clears localStorage on logout.

**Q: Can I use real payment methods?**
A: No, this is a demo. All payments are simulated.

**Q: Where is my data stored?**
A: Everything is in browser's localStorage. No server/database.

**Q: Can multiple users login?**
A: No, this is single-user demo app without real authentication.

**Q: Images not loading?**
A: Images are from Unsplash. Check your internet connection.

---

## 🎓 Learning Resources

### Technologies Used
- **React 18.2** - UI library
- **React Router 6.8** - Navigation
- **Context API** - State management
- **CSS3** - Styling
- **localStorage** - Data persistence

### Learn More
- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🎉 Enjoy Your Amazon MVP!

You now have a complete, functional Amazon-style web application!

**Happy Shopping! 🛍️**

---

**Built with ❤️ using React.js**
**Demo Mode - For Educational Purposes Only**