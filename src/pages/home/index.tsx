import Image from 'next/image'
import homeWelcomeImage from '../../assets/home_welcome_image.svg'
import LoginButton from '@/components/LoginButton'
import { Container, RigthSide, LeftSide, MenuLogin } from './styles'

export default function Home() {
  return (
    <Container>
      <RigthSide>
        <Image src={homeWelcomeImage} alt="" priority />
      </RigthSide>

      <LeftSide>
        <MenuLogin>
          <h3>Boas vindas!</h3>
          <span>Faça seu login ou acesse como visitante.</span>

          <LoginButton variant="google" />
          <LoginButton variant="github" />
          <LoginButton />
        </MenuLogin>
      </LeftSide>
    </Container>
  )
}
