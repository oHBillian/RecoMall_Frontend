"use client"
import React, { useState } from 'react';
import { Image as Imagetype } from '@/type';
import Image from 'next/image';

interface ProductGalleryProps {
  Images: Imagetype[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ Images }) => {
  const [selectedImage, setSelectedImage] = useState(Images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main large image */}
      <div className="aspect-square relative w-full max-w-xs mx-auto overflow-hidden rounded-lg bg-gray-100">
        <Image 
          src={selectedImage.url} 
          alt="Main product image" 
          className="object-contain w-full h-full"
          fill
        />
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-4 gap-2">
        {Images.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square relative w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer
              ${selectedImage.id === image.id ? 'ring-2 ring-black' : 'opacity-70'}
              hover:opacity-100 transition
            `}
          >
            <Image 
              src={image.url} 
              alt="Product thumbnail"
              className="object-contain w-full h-full"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
