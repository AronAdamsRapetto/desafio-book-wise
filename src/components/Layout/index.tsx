import Image from 'next/image'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

import { ChartLineUp, Binoculars, SignIn } from 'phosphor-react'

import logoImage from '../../assets/book_wise_brand.svg'
import {
  LayoutWrapper,
  LoginButton,
  MenuContainer,
  NavLink,
  NavMenu,
} from './styles'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  return (
    <LayoutWrapper>
      <MenuContainer>
        <header>
          <Image src={logoImage} alt="" />
          <NavMenu>
            <NavLink href="/feed" selected={router.pathname === '/feed'}>
              <ChartLineUp
                size={24}
                weight={router.pathname === '/feed' ? 'bold' : 'regular'}
              />
              <span>Início</span>
            </NavLink>
            <NavLink
              href={'/explore'}
              selected={router.pathname === '/explore'}
            >
              <Binoculars
                size={24}
                weight={router.pathname === '/feed' ? 'bold' : 'regular'}
              />
              <span>Explorar</span>
            </NavLink>
          </NavMenu>
        </header>

        <LoginButton>
          <span>Fazer login</span>
          <SignIn size={24} weight="regular" color="#50B2C0" />
        </LoginButton>
      </MenuContainer>
      {children}
    </LayoutWrapper>
  )
}
