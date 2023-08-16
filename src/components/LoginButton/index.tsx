import Image from 'next/image'
import googleLogo from '../../assets/google_logo_1.png'
import githubLogo from '../../assets/github_logo.svg'
import visitorIcon from '../../assets/visitor_rocket_icon.svg'
import { ConnectButton } from './styles'

interface LoginButtonProps {
  variant?: 'google' | 'github'
}

export default function LoginButton({ variant }: LoginButtonProps) {
  if (variant === 'google') {
    return (
      <ConnectButton>
        <Image src={googleLogo} alt="Icone Google" width={32} height={32} />
        <span>Entrar com Google</span>
      </ConnectButton>
    )
  } else if (variant === 'github') {
    return (
      <ConnectButton>
        <Image src={githubLogo} alt="Icone GitHub" width={32} height={32} />
        <span>Entrar com Github</span>
      </ConnectButton>
    )
  } else {
    return (
      <ConnectButton>
        <Image src={visitorIcon} alt="Icone Visitante" width={32} height={32} />
        <span>Acessar como visitante</span>
      </ConnectButton>
    )
  }
}
