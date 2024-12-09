import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/gallery/pizza.jpg',
    alt: 'Delicious pizza with toppings',
  },
  {
    src: '/images/gallery/dish.jpg',
    alt: 'Gourmet dish presentation',
  },
  {
    src: '/images/gallery/salmon.jpg',
    alt: 'Grilled salmon with vegetables',
  },
  {
    src: '/images/gallery/bbq.jpg',
    alt: 'BBQ platter with sides',
  },
  {
    src: '/images/gallery/appetizer.jpg',
    alt: 'Appetizer plate',
  },
  {
    src: '/images/gallery/dessert.jpg',
    alt: 'French toast with fruits',
  },
];

const PhotoGallery = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery; 