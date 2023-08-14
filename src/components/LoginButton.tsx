import Image from 'next/image'
import googleLogo from '../assets/google_logo.svg'
import githubLogo from '../assets/github_logo.svg'
import visitorIcon from '../assets/visitor_rocket_icon.svg'

interface LoginButtonProps {
  variant: 'google' | 'github' | 'visitant'
}

export default function LoginButton({ variant }: LoginButtonProps) {
  if (variant === 'google') {
    return (
      <button>
        <Image src={googleLogo} alt="Icone Google" />
        <span>Entrar com Google</span>
      </button>
    )
  } else if (variant === 'github') {
    return (
      <button>
        <Image src={githubLogo} alt="Icone GitHub" />
        <span>Entrar com Github</span>
      </button>
    )
  } else {
    return (
      <button>
        <Image src={visitorIcon} alt="Icone Visitante" />
        <span>Acessar como visitante</span>
      </button>
    )
  }
}
