import Image from 'next/image'
import { useRouter } from 'next/router'

import homeWelcomeImage from '../../assets/home_welcome_image.svg'
import LoginButton from '@/components/LoginButton'
import { Container, RigthSide, LeftSide, MenuLogin } from './styles'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'authenticated') {
    router.push('/feed')
  }

  return (
    <Container>
      <RigthSide>
        <Image src={homeWelcomeImage} alt="" priority />
      </RigthSide>

      <LeftSide>
        {status === 'loading' ? ( // Adicionar algum tipo de informação visual para o loaging
          <h2>Loading...</h2>
        ) : (
          status === 'unauthenticated' && (
            <MenuLogin>
              <h3>Boas vindas!</h3>
              <span>Faça seu login ou acesse como visitante.</span>

              <LoginButton variant="google" />
              <LoginButton variant="github" />
              <LoginButton />
            </MenuLogin>
          )
        )}
      </LeftSide>
    </Container>
  )
}
