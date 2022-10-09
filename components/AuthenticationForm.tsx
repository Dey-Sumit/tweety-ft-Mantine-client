import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
} from '@mantine/core'
import {
  useLoginMutation,
  useSignupMutation,
} from 'hooks/react-query/mutations'
import { useUser } from 'hooks/react-query/queries'

const inputClasses = {
  label: 'text-white',
  input: 'bg-gray-700 border border-gray-500 text-white',
  innerInput: 'text-white',
}
export function AuthenticationForm() {
  const [type, toggle] = useToggle(['login', 'register'])
  // useUser({
  //   onSuccess: (data) => {
  //     console.log('user => ', data)
  //   },
  // })
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      username: '',
    },

    validate: {
      email: (val) => {
        if (type === 'login') return null
        return /^\S+@\S+$/.test(val) ? null : 'Invalid email'
      },
      password: (val) =>
        val.length < 6 ? 'Password should include at least 6 characters' : null,
      name: (val) => {
        if (type === 'login') return null

        return val.length < 3
          ? 'Name should include at least 3 characters'
          : null
      },
      username: (val) =>
        val.length < 4 ? 'Username should include at least 4 characters' : null,
    },
  })

  const { mutate: signUp, isLoading } = useSignupMutation({
    onSuccess: (data) => {
      console.log({ data })
    },
  })

  const { mutate: login, isLoading: isLoginProcessing } = useLoginMutation({
    onSuccess: (data) => {
      console.log({ data })
    },
  })

  // const {login,register,isLoading} =    useAuth() // CONCEPT DE CUSTOM HOOKS

  // console.log({ isLoading })

  const handleAuth = () => {
    console.log('form.values', form.values, type)
    if (type === 'register') {
      signUp(form.values)
    } else {
      login({
        username: form.values.username,
        password: form.values.password,
      })
    }
  }

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      className="text-white bg-gray-900 border border-gray-800"
    >
      <form onSubmit={form.onSubmit(handleAuth)}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
              classNames={inputClasses}
              {...form.getInputProps('name')}
            />
          )}

          <TextInput
            required
            label="Username"
            placeholder="Your username"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue('username', event.currentTarget.value)
            }
            classNames={inputClasses}
            {...form.getInputProps('username')}
          />
          {type === 'register' && (
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue('email', event.currentTarget.value)
              }
              classNames={inputClasses}
              {...form.getInputProps('email')}
            />
          )}

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            {...form.getInputProps('password')}
            classNames={{
              ...inputClasses,
              visibilityToggle: 'bg-gray-700 hover:bg-gray-600 text-white',
            }}
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => {
              form.clearErrors()
              toggle()
            }}
            size="xs"
            className="text-white"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button
            type="submit"
            classNames={{
              root: 'text-white bg-primaryDark hover:bg-primary px-10',
            }}
          >
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  )
}
