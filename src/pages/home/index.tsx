import Image from 'next/image'
import homeWelcomeImage from '../../assets/home_welcome_image.svg'
import LoginButton from '@/components/LoginButton'
import {
  Container,
  RigthSide,
  InnerContainer,
  LeftSide,
  MenuLogin,
} from './styles'

export default function Home() {
  return (
    <Container>
      <RigthSide>
        <InnerContainer>
          <Image
            src={homeWelcomeImage}
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </InnerContainer>
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
