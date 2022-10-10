import { AuthenticationForm } from '@components/AuthenticationForm'
import Image from 'next/image'

import heroImage from '@public/images/authHeroImage.png'
import logo from '@public/images/logo.svg'
import { useUser } from 'hooks/react-query/queries'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Auth = () => {
  const { data: user } = useUser({
    enabled: false,
  })
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [])

  return (
    <div className="grid h-screen grid-cols-8 text-white">
      {/* left part */}
      <div className="hidden col-span-3 p-4 bg-blue-800 md:grid place-items-center">
        <h1 className="px-8 mb-5 text-3xl font-semibold ">
          Tweety helps you to focus more on social life {'\n'} than your real
          life!{' '}
        </h1>
        <div className="w-full h-full ">
          <Image
            placeholder="blur"
            layout="responsive"
            src={heroImage}
            alt=""
          />
        </div>
      </div>

      {/* right part */}
      <div className="grid col-span-8 p-2 bg-dark-700 md:col-span-5 place-items-center">
        <div className="flex flex-col justify-center space-y-8">
          <Image src={logo} width={40} height={40} alt="logo" />
          <h3 className="mb-10 text-lg md:text-2xl">
            Come on! Let&apos;s waste time on Social Media
          </h3>
          <AuthenticationForm />
        </div>
      </div>
    </div>
  )
}

export default Auth
