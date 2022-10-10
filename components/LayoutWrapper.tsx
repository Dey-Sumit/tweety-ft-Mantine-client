import { useUser } from 'hooks/react-query/queries'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

/**
 * Wraps the whole app -> MainLayout , OnBoardingLayout
 */

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter()
  useUser({
    onError: () => {
      router.push('/auth') // TODO: check if the status is 401
    },
  })

  return <>{children}</>
}

export default LayoutWrapper
