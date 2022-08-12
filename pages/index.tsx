import Trending from '../components/Trending'
import type { NextPage } from 'next'
import { NavbarMinimal } from '../components/Navbar'
import RichTextBox from '../components/RichTextBox'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black flex max-w-[1280px] mx-auto">
      <NavbarMinimal />

      <div className="grid grid-cols-8 gap-x-8 w-full">
        <div className="col-span-8 md:col-span-5 border-x border-gray-700 ">
          <RichTextBox />
        </div>
        <div className="hidden col-span-8 py-4 space-y-4 md:col-span-3 md:block text-white">
          <Trending />
        </div>
      </div>
    </div>
  )
}

export default Home
