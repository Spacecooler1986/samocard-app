'use client'

import { useModal } from '@/hooks'
import { ModalProvider } from '@/providers/modalProvider'
import AuthForm from '@/components/common/AuthForm'
import { Sidebar } from '@/components/common/Sidebar'
import { AuthModal } from '@/components/common/ui-kit'

import { HeaderDefault } from './HeaderDefault'
import { HeaderAuthorized } from './HeaderAuthorized'
import { HeaderConstructor } from './HeaderConstructor'

interface HeaderProps {
  isAuthorized?: boolean;
  isConstructor?: boolean;
}

export function Header({
  isAuthorized,
  isConstructor,
}: HeaderProps) {
  const {
    isOpen: isMenuOpen,
    open: openMenu,
    close: closeMenu,
  } = useModal()

  const {
    isOpen: isAuthModalOpen,
    open: openAuthModal,
    close: closeAuthModal,
  } = useModal()

  const {
    isOpen: isRegModalOpen,
    open: openRegModal,
    close: closeRegModal,
  } = useModal()

  if (!isAuthorized) {
    return (
      <>
        <HeaderDefault
          openAuthModal={openAuthModal}
          openRegModal={openRegModal}
        />

        <ModalProvider
          value={{
            isOpen: isAuthModalOpen,
            close: closeAuthModal,
          }}
        >
          <AuthModal>
            <AuthForm />
          </AuthModal>
        </ModalProvider>

        <ModalProvider
          value={{
            isOpen: isRegModalOpen,
            close: closeRegModal,
          }}
        >
          <AuthModal>
            <AuthForm />
          </AuthModal>
        </ModalProvider>
      </>
    )
  }

  if (isConstructor) {
    return (
      <>
        <HeaderConstructor openMenu={openMenu} />
        <Sidebar
          isOpen={isMenuOpen}
          close={closeMenu}
        />
      </>
    )
  }

  return (
    <>
      <HeaderAuthorized openMenu={openMenu} />
      <Sidebar
        isOpen={isMenuOpen}
        close={closeMenu}
      />
    </>
  )
}
