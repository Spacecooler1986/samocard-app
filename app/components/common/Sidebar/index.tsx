import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'

import { useModalsContainer } from '@/hooks'

import { SidebarContainer } from './SidebarContainer'
import { SidebarBackground } from './SidebarBackground'
import { SidebarPanel } from './SidebarPanel'

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
}

export function Sidebar({ close, isOpen }: SidebarProps) {
  const { modalsContainer } = useModalsContainer()

  console.log('IS OPEN > ', isOpen)

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <SidebarContainer>
          <SidebarBackground close={close} />
          <SidebarPanel close={close} />
        </SidebarContainer>
      )}
    </AnimatePresence>
  )

  return Boolean(modalsContainer) && createPortal(modal, modalsContainer)
}
