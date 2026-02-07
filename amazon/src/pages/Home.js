import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import CategoryStrip from '../components/CategoryStrip';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';
import HeroCarousel from '../components/HeroCarousel';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddedToast, setShowAddedToast] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAddedToast(true);
    setTimeout(() => {
      setShowAddedToast(false);
    }, 2000);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="home-page">
      <Header onSearch={setSearchQuery} />

      <CategoryStrip
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {/* Show Carousel on home (no search active). 
           Even if specific category is selected, we might want to show a relevant banner, 
           but for now, to satisfy "Create an Amazon-style Hero Carousel", we keep it on the main view.
           However, let's relax the condition: Show if no search query.
        */}
      {!searchQuery && <HeroCarousel />}

      <div className="home-content">
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            {/* Horizontal Scroll Section for "Best Sellers" - Only on main view */}
            {!searchQuery && selectedCategory === 'all' && (
              <div className="product-section">
                <h2 className="section-title">Best Sellers in Electronics</h2>
                <div className="horizontal-scroll-container">
                  {products.filter(p => p.category === 'Electronics').slice(0, 5).map(product => (
                    <div key={product.id} className="horizontal-card-wrapper">
                      <ProductCard
                        product={product}
                        onAddToCart={handleAddToCart}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Standard Grid for remaining products */}
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {showAddedToast && (
        <div className="toast-notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Added to cart</span>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Home;
