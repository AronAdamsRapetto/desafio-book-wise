import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import googleLogo from '../../assets/google_logo_1.png'
import githubLogo from '../../assets/github_logo.svg'
import visitorIcon from '../../assets/visitor_rocket_icon.svg'
import { ConnectButton } from './styles'

interface LoginButtonProps {
  variant?: 'google' | 'github'
}

export default function LoginButton({ variant }: LoginButtonProps) {
  const router = useRouter()

  if (variant === 'google') {
    return (
      <ConnectButton onClick={() => signIn('google')}>
        <Image src={googleLogo} alt="Icone Google" width={32} height={32} />
        <span>Entrar com Google</span>
      </ConnectButton>
    )
  } else if (variant === 'github') {
    return (
      <ConnectButton onClick={() => signIn('github')}>
        <Image src={githubLogo} alt="Icone GitHub" width={32} height={32} />
        <span>Entrar com Github</span>
      </ConnectButton>
    )
  } else {
    return (
      <ConnectButton onClick={() => router.push('/feed')}>
        <Image src={visitorIcon} alt="Icone Visitante" width={32} height={32} />
        <span>Acessar como visitante</span>
      </ConnectButton>
    )
  }
}
