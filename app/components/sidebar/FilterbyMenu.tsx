// app/components/sidebar/FilterByMenu.tsx

import React from 'react';

const menuItems = [
  {
    name: 'Chicken Fry',
    count: 26,
    image: '/path/to/chicken-fry.jpg',
  },
  {
    name: 'Burger Food',
    count: 46,
    image: '/path/to/burger-food.jpg',
  },
  {
    name: 'Pizza',
    count: 16,
    image: '/path/to/pizza.jpg',
  },
  {
    name: 'Fresh Fruits',
    count: 36,
    image: '/path/to/fresh-fruits.jpg',
  },
  {
    name: 'Vegetables',
    count: 16,
    image: '/path/to/vegetables.jpg',
  },
];

const FilterByMenu = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filter By Menu</h2>
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover mr-4"
            />
            <p className="text-gray-400">{item.name}</p>
          </div>
          <p className="text-gray-400">{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterByMenu;