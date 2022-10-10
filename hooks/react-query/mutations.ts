// create a react-query mutation hook for signup and login
import { useMutation, UseMutationOptions } from 'react-query'
import axios from 'axios'
import ENDPOINTS from 'configs/endpoints'
import { User } from 'configs/types'

interface SignUpData {
  name: string
  username: string
  email: string
  password: string
}
// TODO : add type for the response (eg. User)
export const useSignupMutation = (
  options?: Omit<
    UseMutationOptions<unknown, unknown, SignUpData, unknown>,
    'mutationFn'
  >
) => {
  const signUp = (data: SignUpData) => axios.post(ENDPOINTS.SIGN_UP, data)

  return useMutation(signUp, options)
}

interface LoginData {
  username: string
  password: string
}
// TODO : add type for the response (eg. User)
export const useLoginMutation = (
  options?: Omit<
    UseMutationOptions<User, unknown, LoginData, unknown>,
    'mutationFn'
  >
) => {
  const login = (data: LoginData): Promise<User> =>
    axios.post(ENDPOINTS.LOGIN, data).then((res) => res.data)

  return useMutation(login, options)
}

// export const useAuth = (
//   type: 'signup' | 'login',
//   options?: Omit<
//     UseMutationOptions<User, unknown, LoginData | SignUpData, unknown>,
//     'mutationFn'
//   >
// ) => {
//   const login = (data: LoginData): Promise<User> =>
//     axios.post(ENDPOINTS.LOGIN, data).then((res) => res.data)
//   const signUp = (data: SignUpData): Promise<User> =>
//     axios.post(ENDPOINTS.SIGN_UP, data)

//   return useMutation(type === 'login' ? login : signUp, options)
// }
