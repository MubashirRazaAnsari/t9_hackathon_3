import React from 'react'
import Image from 'next/image'

interface MenuItemProps {
  image: string
  title: string
  description: string
  price: string
}

const MenuItem = ({ image, title, description, price }: MenuItemProps) => {
  return (
    <div className="flex items-start gap-4 w-[300px] h-[79px]">
      {/* Image */}
      <div className="relative w-[50px] h-[50px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-white text-xl font-bold mb-1">
          {title}
        </h3>
        <p className="text-white text-sm mb-1">
          {description}
        </p>
        <span className="text-[#FF9F0D] text-lg font-bold">
          {price}$
        </span>
      </div>
    </div>
  )
}

export default MenuItem 