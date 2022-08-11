import { Button } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { IconCopy, IconCheck } from '@tabler/icons'

const CustomButton = () => {
  const clipboard = useClipboard()

  return (
    <Button
      variant="light"
      rightIcon={
        clipboard.copied ? (
          <IconCheck size={20} stroke={1.5} />
        ) : (
          <IconCopy size={20} stroke={1.5} />
        )
      }
      radius="xl"
      size="md"
      onClick={() =>
        clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      }
      classNames={{
        label: '',
        rightIcon: '',
        root: 'text-white bg-gray-600 hover:bg-gray-600 m-10 px-10',
      }}
    >
      Copy link to clipboard
    </Button>
  )
}

export default CustomButton
