import Image from 'next/image'
import React from 'react'

const Avatar = ({ src, handleClick }) => {
  return (
    <div className="flex-shrink-0 cursor-pointer ">
      <Image
        width={42}
        height={42}
        layout="fixed"
        objectFit="cover"
        quality={100}
        src={src}
        alt=""
        onClick={handleClick}
        className="rounded-full "
      />
    </div>
  )
}

export default Avatar
