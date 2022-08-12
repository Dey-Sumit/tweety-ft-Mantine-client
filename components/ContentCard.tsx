import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import profileImage from '../public/images/profile-image.jpeg'

import Image from 'next/image'
import { useRouter } from 'next/router'
import Avatar from './Avatar'
import { MdOutlineIosShare } from 'react-icons/md'

const ContentCard = ({
  content,
  user: { name = 'Sumit', username = 'sumit' } = {},

  attachmentURL,
  _id,
  clientOnly,
}) => {
  const router = useRouter()

  return (
    <div className="flex p-2 space-x-3 text-sm md:text-base text-white border border-gray-600">
      {/* <div className="relative"> */}
      <Avatar src={profileImage} handleClick={() => console.log('clicked')} />
      <div
        className="flex-col w-full px-1  rounded-md shadow-sm cursor-pointer bg-dark-600  "
        onClick={() => !clientOnly && router.push(`/tweet/${_id}`)}
      >
        {/* top */}
        <div className="flex items-center text-sm md:text-base ">
          <span className="flex-shrink-0 text-white font-bold">{name} </span>
          <span className="flex-shrink-0 mx-2 overflow-hidden text-gray-300 cursor-pointer overflow-ellipsis flex-grow-1 whitespace-nowrap ">
            @{username}
          </span>
          <span> · 2h</span>
        </div>
        <div className="whitespace-pre-wrap  ">
          {JSON.parse(content).map((word, i) => {
            return typeof word.insert === 'string' ? (
              <span key={i}>{word.insert}</span>
            ) : word.insert.mention.denotationChar === '@' ? (
              <Mention key={i} text={word.insert.mention.value} />
            ) : (
              <Hash key={i} text={word.insert.mention.value} />
            )
          })}
        </div>
        {attachmentURL && (
          <div className="relative  h-[280px] mx-auto tweetCardImage__wrapper">
            {/* //! Next image does not support blob */}

            {clientOnly ? (
              // eslint-disable-next-line
              <img
                src={attachmentURL}
                alt="attachment"
                className="object-contain w-full h-full border rounded-xl"
              />
            ) : (
              <Image
                layout="fill"
                quality={100}
                objectFit="contain"
                src={attachmentURL}
                alt="attachment"
              />
            )}
          </div>
        )}
        <InteractionSection />
      </div>
    </div>
  )
}

export default ContentCard

const Hash = ({ text }: { text: string }) => {
  const router = useRouter()

  return (
    <span
      className="text-blue-600"
      onClick={(e) => {
        e.stopPropagation()
        router.push(`/tags/${text.slice(1)}`)
      }}
    >
      {text}
    </span>
  )
}
const Mention = ({ text }: { text: string }) => {
  const router = useRouter()

  return (
    <span
      className="text-red-600"
      onClick={(e) => {
        e.stopPropagation()
        router.push(`/users/${text.slice(1)}`)
      }}
    >
      {text}
    </span>
  )
}

const InteractionSection = ({ comments = [] }) => (
  <div className="flex justify-around  text-gray-400">
    <div className="flex items-center cursor-pointer">
      <BiComment
        size={32}
        className="p-2 rounded-full hover:bg-blue-600 hover:bg-opacity-30 hover:text-blue-600"
      />
      <span className="text-base">{comments ? comments.length : 0}</span>
    </div>
    <div className="flex items-center cursor-pointer">
      <AiOutlineHeart
        className="p-2 rounded-full hover:bg-pink-700 hover:bg-opacity-30 hover:text-pink-600"
        size={32}
      />
      <span className="text-base">10</span>
    </div>

    <AiOutlineDelete
      size={35}
      className="p-2 rounded-full hover:bg-red-600 hover:bg-opacity-30 hover:text-red-600"
    />
    <MdOutlineIosShare
      size={35}
      className="p-2 rounded-full hover:bg-red-600 hover:bg-opacity-30 hover:text-red-600"
    />
  </div>
)
