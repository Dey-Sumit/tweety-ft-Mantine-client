import { Modal } from '@mantine/core'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}
function CustomModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Introduce yourself!"
      centered
    >
      <div>
        <h1>Hello, I am a modal</h1>
      </div>
    </Modal>
  )
}

export default CustomModal
