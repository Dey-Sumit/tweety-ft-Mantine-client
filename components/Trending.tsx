import HashtagCard from './HashTagCard'

const Trending = ({ noOfElements = 10 }) => {
  // const { data: tags, error } = useSWR<Tag[]>('/api/tags')
  const tags = [
    {
      _id: 1,
      name: 'JavaScript',
      length: 10,
    },
    {
      _id: 11,
      name: 'JavaScript',
      length: 10,
    },
    {
      _id: 111,
      name: 'JavaScript',
      length: 10,
    },
  ]
  return (
    <div className="flex flex-col divide-y shadow-sm rounded-2xl bg-[#17181C] divide-gray-800 overflow-hidden ">
      <h3 className="p-3 text-xl font-bold text-white">Trends For You</h3>
      {/* {error && <h3 className="customText-h3">Could not load , Retrying</h3>} */}

      {tags.slice(0, noOfElements).map((tag) => (
        <HashtagCard tag={tag} key={tag._id.toString()} />
      ))}
    </div>
  )
}

export default Trending
