'use client';

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="relative group">
      <Image 
        src={image}
        alt={name}
        width={300}
        height={400}
        className="w-full"
      />
      <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
          <FaPinterest size={20} />
        </a>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember; 