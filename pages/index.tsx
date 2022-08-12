import type { NextPage } from 'next'
import { NavbarMinimal } from '../components/Navbar'
import RichTextBox from '../components/RichTextBox'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black flex max-w-[1280px] mx-auto">
      <NavbarMinimal />
      {/* <div className="flex-1 bg-black grid grid-cols-8 gap-x-4 ">
        <div className="sm:col-span-5 col-span-full border-x border-gray-600">
          <RichTextBox />
        </div>
        <div className="col-span-3 p-4 hidden sm:flex">
          <h1>Kuch khas content</h1>
        </div>
      </div> */}

      <div className="grid grid-cols-8 gap-x-8 w-full">
        <div className="col-span-8 md:col-span-5 border-x ">
          <RichTextBox />
        </div>
        <div className="hidden col-span-8 py-4 space-y-4 md:col-span-3 md:block text-white">
          <h1 className="text-white">Kuch khas content</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
