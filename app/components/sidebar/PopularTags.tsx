import React from 'react';
import Link from 'next/link';

const tags = [
  'Sandwich', 'Tikka', 'Bbq', 'Restaurant', 'Chicken Sharma',
  'Health', 'Fastfood', 'Food', 'Pizza', 'Burger', 'Chicken'
];

const PopularTags = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            href={`/blog/tag/${tag.toLowerCase()}`}
            key={tag}
            className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags; 