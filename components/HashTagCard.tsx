import { useRouter } from 'next/router'

const HashtagCard = ({ tag: { name, length } }) => {
  const { push } = useRouter()

  return (
    <div
      className="flex flex-col p-3 cursor-pointer hover:bg-gray-800 "
      onClick={() => push(`/tags/${name}`)}
    >
      <span className="text-white">#{name}</span>
      <span>{length} Tweets</span>
    </div>
  )
}

export default HashtagCard
