// RichText.tsx in your components folder
import { Editor, RichTextEditorProps } from '@mantine/rte'
import dynamic from 'next/dynamic'
import { Ref } from 'react'

// export default dynamic(() => import('@mantine/rte'), {
//   // Disable during server side rendering
//   ssr: false,

//   // Render anything as fallback on server, e.g. loader or html content without editor
//   loading: () => null,
// })

const RichText = dynamic(
  async () => {
    const { default: RQ } = await import('@mantine/rte')

    // eslint-disable-next-line react/display-name
    return ({
      editorRef,
      ...props
    }: RichTextEditorProps & { editorRef: Ref<Editor> }) => (
      <RQ ref={editorRef} {...props} />
    )
  },
  {
    ssr: false,
  }
)

export default RichText

// https://github.com/mantinedev/mantine/issues/1625
