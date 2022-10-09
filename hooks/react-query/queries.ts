import axios from 'axios'
import ENDPOINTS from 'configs/endpoints'
import { User } from 'configs/types'
import { useQuery, UseQueryOptions } from 'react-query'

export const useUser = (
  options?:
    | Omit<UseQueryOptions<User, unknown, User, string>, 'queryKey' | 'queryFn'>
    | undefined
) => {
  const getUser = (): Promise<User> =>
    axios.get(ENDPOINTS.ME).then((res) => {
      console.log({ res })

      return res.data
    })
  return useQuery(ENDPOINTS.ME, getUser, {
    ...options,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  })
}
