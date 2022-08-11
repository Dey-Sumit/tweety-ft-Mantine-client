import type { NextPage } from 'next'
import { NavbarMinimal } from '../components/Navbar'
import Editor from '../components/Editor'
import RichTextBox from '../components/RichTextBox'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black flex max-w-[1280px] mx-auto">
      <NavbarMinimal />
      <div className="flex-1 bg-gray-900 grid grid-cols-8 gap-x-4 ">
        <div className="col-span-5 border-x border-gray-600">
          <RichTextBox />
        </div>
        <div className="col-span-3 p-4">
          <h1>Kuch khas content</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
