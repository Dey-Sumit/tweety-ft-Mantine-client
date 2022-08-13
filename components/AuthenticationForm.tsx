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

export function AuthenticationForm() {
  const [type, toggle] = useToggle(['login', 'register'])

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
      name: (val) =>
        val.length <= 3 ? 'Name should include at least 3 characters' : null,
    },
  })

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      className="bg-gray-900 border border-gray-800 text-white"
    >
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
              classNames={{
                label: 'text-white',
                input: 'bg-gray-700 border border-gray-500 text-white',
                innerInput: 'text-white',
              }}
              {...form.getInputProps('name')}
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            classNames={{
              label: 'text-white',
              input: 'bg-gray-700 border border-gray-500 text-white',
              innerInput: 'text-white',
            }}
            {...form.getInputProps('email')}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            // error={
            //   form.errors.password &&
            //   'Password should include at least 6 characters'
            // }
            {...form.getInputProps('password')}
            classNames={{
              label: 'text-white',
              input: 'bg-gray-700 border border-gray-500 text-white',
              innerInput: 'text-white',

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
