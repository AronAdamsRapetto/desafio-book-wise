import * as RadixDialog from '@radix-ui/react-dialog'
import { CloseButton, ContentContainer, Overlay, Title } from './styles'
import { X } from 'phosphor-react'
import LoginButton from '../LoginButton'

export default function LoginDialog() {
  return (
    <RadixDialog.Portal>
      <Overlay />

      <ContentContainer>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <div>
          <Title>Faça login para deixar sua avaliação</Title>

          <LoginButton variant="google" />
          <LoginButton variant="github" />
        </div>
      </ContentContainer>
    </RadixDialog.Portal>
  )
}
