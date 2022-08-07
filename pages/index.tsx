import type { NextPage } from 'next'
import { NavbarMinimal } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-300 flex">
      <NavbarMinimal />
      <div className="flex-1 bg-gray-500 items-center justify-center flex">
        <h1>Hello Next.js</h1>
      </div>
    </div>
  )
}

export default Home
