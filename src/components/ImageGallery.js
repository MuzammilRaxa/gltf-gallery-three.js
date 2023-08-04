'use client'

// components/ImageGallery.js
import { useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImages((prevImages) => [...prevImages, event.target.result]);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-wrap">
      <input type="file" onChange={handleImageUpload} />
      {images.map((image, index) => (
        <div
          key={index}
          className="w-1/4 p-2 cursor-pointer"
          onClick={() => console.log('Clicked image:', image)} // Replace with your click handler
        >
          <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
