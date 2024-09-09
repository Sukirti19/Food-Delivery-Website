import React, { useState, useEffect } from 'react'
import './Header.css'
// const images = [
  // Replace the following with your image URLs
  // './frontend/public/header.jpg',
  // './frontend/public/header.jpg',
  // 'https://your-image3.jpg',
  // 'https://your-image4.jpg',
  // 'https://your-image5.jpg',
// ];

const Header = () => {
  // const [currentImage, setCurrentImage] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 15000);

  //   return () => clearInterval(intervalId);
  // }, [images.length]);
  return (
    // <div className="slider">
    //   <img src={images[currentImage]} alt="Image slider" />
    <div className='header'>
     <div className="header-contents">
          <h2>Order your favorite food here</h2>
          <p>Discover a world of culinary delight with our expertly crafted dishes, made from the freshest ingredients and bursting with flavor. Whether you're craving a hearty meal or a light snack, our menu promises to tantalize your taste buds and leave you coming back for more.</p>
          <button>View Menu</button>
     </div>

    </div>
    // </div>
  )
}

export default Header
