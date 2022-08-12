import { Button } from '@mantine/core'
import { Editor } from '@mantine/rte'
import { useMemo, useRef, useState } from 'react'
import RichTextEditor from '../components/RichText'

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

function CreatePost() {
  const [value, setValue] = useState('')
  const [content, setContent] = useState<undefined | string>(undefined)

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
    setContent(JSON.stringify(rawContent.ops))
  }

  return (
    <>
      <RichTextEditor
        editorRef={editorRef}
        value={value}
        onChange={handleChange}
        mentions={mentions}
        controls={[]}
        classNames={{
          root: 'w-full',
          toolbar: 'hidden',
        }}
      />
      <Button
        onClick={handleClick}
        variant="white"
        classNames={{
          root: 'bg-white m-8',
        }}
      >
        submit data
      </Button>

      <div className="whitespace-pre-wrap ">
        {content &&
          JSON.parse(content).map((word) => {
            return typeof word.insert === 'string' ? (
              <span>{word.insert}</span>
            ) : word.insert.mention.denotationChar === '@' ? (
              <Mention>{word.insert.mention.value}</Mention>
            ) : (
              <Hash>{word.insert.mention.value}</Hash>
            )
          })}
      </div>
    </>
  )
}

export default CreatePost

const Hash = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className="text-blue-600"
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {children}{' '}
    </span>
  )
}
const Mention = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className="text-red-600"
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {children}{' '}
    </span>
  )
}
