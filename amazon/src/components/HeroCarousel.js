
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HeroCarousel.css';

const HeroCarousel = () => {
    // Amazon-style banner placeholders - using reliable image sources
    const banners = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop",
            alt: "Shopping Banner 1"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop",
            alt: "Fashion Sale"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&h=400&fit=crop",
            alt: "Electronics"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=400&fit=crop",
            alt: "Home & Kitchen"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1510166089176-b57564a542b1?w=1200&h=400&fit=crop",
            alt: "Beauty Products"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=400&fit=crop",
            alt: "Sports & Fitness"
        }
    ];

    return (
        <div className="hero-carousel-container">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={5000}
                showStatus={false}
                showIndicators={true}
                stopOnHover
                emulateTouch
            >
                {banners.map((banner) => (
                    <div key={banner.id} className="hero-slide">
                        <img src={banner.image} alt={banner.alt} />
                    </div>
                ))}
            </Carousel>
            <div className="hero-gradient"></div>
        </div>
    );
};

export default HeroCarousel;
