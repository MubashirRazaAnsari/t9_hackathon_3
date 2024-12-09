// app/components/sidebar/RecentPosts.tsx

import React from 'react';

const posts = [
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/path/to/image1.jpg',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/path/to/image2.jpg',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/path/to/image3.jpg',
  },
  {
    date: 'June 22, 2020',
    description: 'Lorem ipsum dolor sit cing elit, sed do.',
    image: '/path/to/image4.jpg',
  },
];

const RecentPosts = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Post</h2>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            src={post.image}
            alt="Post"
            className="w-16 h-16 rounded-md object-cover mr-4"
          />
          <div>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p className="text-sm">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;