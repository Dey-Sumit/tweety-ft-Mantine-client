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

// TODO : it gets a active prop , use this to set the active class
function NavbarLink({ icon: Icon, label, onClick }: NavbarLinkProps) {
  return (
    <Button
      onClick={onClick}
      classNames={{
        root: 'h-12 flex item-center hover:bg-gray-800 rounded-full mb-4',
      }}
    >
      <Icon stroke={1.5} />
      <span className="hidden ml-4 text-lg font-bold sm:block">{label}</span>
    </Button>
  )
}

const navData = [
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

  const links = navData.map((link, index) => (
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
      className=" h-screen w-max sm:min-w-[220px] bg-transparent text-white border-r-0"
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
