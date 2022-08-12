import { useState } from 'react'
import { Navbar, Center, Stack, Button } from '@mantine/core'
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
} from '@tabler/icons'
import CustomModal from './Modal'

interface NavbarLinkProps {
  icon: TablerIcon
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Button
      onClick={onClick}
      classNames={{
        root: 'h-12 flex item-center hover:bg-gray-700 rounded-full mb-4',
      }}
    >
      <Icon stroke={1.5} />
      <span className="hidden sm:block ml-2">{label}</span>
    </Button>
  )
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
]

export function NavbarMinimal() {
  const [active, setActive] = useState(2)

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ))

  const [opened, setOpened] = useState(false)

  return (
    <Navbar
      p="md"
      className=" h-screen w-max sm:min-w-[200px] bg-transparent text-white"
    >
      <Center>
        <span>Logo</span>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0} className="text-white">
          <NavbarLink
            icon={IconLogout}
            label="Logout"
            onClick={() => setOpened(true)}
          />
        </Stack>
      </Navbar.Section>
      <CustomModal onClose={() => setOpened(false)} isOpen={opened} />
    </Navbar>
  )
}
