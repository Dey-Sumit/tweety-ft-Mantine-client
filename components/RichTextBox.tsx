import Image from 'next/image'
import React, { ChangeEvent } from 'react'
import profileImage from '../public/images/profile-image.jpeg'
// import { Button } from '@mantine/core'
import { Editor } from '@mantine/rte'
import { useMemo, useRef, useState } from 'react'
import RichTextEditor from '../components/RichText'
import { MdCancel } from 'react-icons/md'
import { IoImageOutline } from 'react-icons/io5'
import ContentCard from './ContentCard'

const people = [
  { id: 1, value: 'Bill Horsefighter' },
  { id: 2, value: 'Amanda Hijacker' },
  { id: 3, value: 'Leo Summerhalter' },
  { id: 4, value: 'Jane Sinkspitter' },
]

const tags = [
  { id: 1, value: 'JavaScript' },
  { id: 2, value: 'TypeScript' },
  { id: 3, value: 'Ruby' },
  { id: 3, value: 'Python' },
]

const RichTextBox = () => {
  const [value, setValue] = useState('')
  const [posts, setPosts] = useState<Array<undefined | string>>([])
  const [file, setFile] = useState(null)
  console.log({ posts })

  const handleChange = (value: string) => {
    setValue(value)
  }

  const editorRef = useRef<Editor>(null)

  const mentions = useMemo(
    () => ({
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@', '#'],
      source: (searchTerm: string, renderList, mentionChar: '@' | '#') => {
        const list = mentionChar === '@' ? people : tags
        const includesSearchTerm = list.filter((item) =>
          item.value.toLowerCase().includes(searchTerm.toLowerCase())
        )
        renderList(includesSearchTerm)
      },
    }),
    []
  )

  const handleClick = () => {
    const rawContent = editorRef.current.editor.getContents()
    setPosts([JSON.stringify(rawContent.ops), ...posts])
  }

  const onChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
    e.target.value = null // else cant select the previous file
  }

  return (
    <>
      <div className="flex p-4 py-0 mt-8 border-b border-gray-600 ">
        <Image
          width={44}
          height={44}
          layout="fixed"
          objectFit="cover"
          quality={100}
          src={profileImage}
          alt="avatar"
          className="rounded-full "
        />

        <div className="flex-1">
          <div>
            {/* className="w-full h-24 p-2 text-sm bg-transparent rounded-md md:text-base focus:outline-none" */}

            <RichTextEditor
              editorRef={editorRef}
              value={value}
              onChange={handleChange}
              mentions={mentions}
              controls={[]}
              classNames={{
                root: 'w-full h-20 border-0 bg-transparent text-white text-lg md:text-=xl  focus:outline-none ',
                toolbar: 'hidden',
              }}
              placeholder="Whats happening?"
            />
            {file && (
              <div className="relative my-2">
                {/* https://github.com/vercel/next.js/discussions/19732 */}
                {/*eslint-disable-next-line */}
                <img
                  src={URL.createObjectURL(file)}
                  alt=" attachment"
                  className=" w-full max-h-[360px] object-cover mx-auto border rounded-xl "
                />
                <MdCancel
                  className="absolute w-6 h-6 text-gray-100 transform -translate-x-1/2 cursor-pointer inset-x-1/2 bottom-3"
                  onClick={() => setFile(null)}
                />
              </div>
            )}
          </div>

          <div className="flex pb-3 pl-4 items-end">
            <div>
              <label htmlFor="file-input">
                <IoImageOutline className="w-6 h-6 text-[#399BF0] cursor-pointer " />
              </label>
              <input
                id="file-input"
                onChange={onChangePicture}
                type="file"
                name="attachment"
                className="hidden"
                accept="image/*"
              />
            </div>
            <button
              className="px-4 py-1 ml-auto text-base  text-white font-bold bg-[#399BF0] rounded-full focus:outline-none "
              type="submit"
              onClick={handleClick}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div>
        {posts.map((post, index) => (
          <ContentCard
            clientOnly
            attachmentURL={file ? URL.createObjectURL(file) : null}
            content={post}
            _id="1"
            key={index}
          />
        ))}
      </div>
    </>
  )
}

export default RichTextBox
// 399BF0
