import Image from 'next/image'

import * as RadixDialog from '@radix-ui/react-dialog'
import { BookOpen, BookmarkSimple, Star, X } from 'phosphor-react'

import image from '../../../public/books/14-habitos-de-desenvolvedores-altamente-produtivos.jpg'
import {
  BookInfoContainer,
  BulletInfoContainer,
  CloseButton,
  ContentContainer,
  HeaderContainer,
  Overlay,
  RateCardContainer,
  RateHeader,
  RatingsContainer,
  UserContainer,
} from './styles'

export default function BookDialog() {
  return (
    <RadixDialog.Portal>
      <Overlay />
      <ContentContainer>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <HeaderContainer>
          <div>
            <Image src={image} alt="" width={171} height={242} />
            <BookInfoContainer>
              <div>
                <span>14 Hábitos de Desenvolvedores Altamente Produtivos</span>
                <span>Zeno Rocha</span>
              </div>

              <div>
                <div>
                  <Star size={20} />
                  <Star size={20} />
                  <Star size={20} />
                  <Star size={20} />
                  <Star size={20} />
                </div>

                <span>3 avaliações</span>
              </div>
            </BookInfoContainer>
          </div>

          <BulletInfoContainer>
            <div>
              <BookmarkSimple size={24} />
              <div>
                <span>Categoria</span>
                <span>Computação, educação</span>
              </div>
            </div>

            <div>
              <BookOpen size={24} />
              <div>
                <span>Páginas</span>
                <span>160</span>
              </div>
            </div>
          </BulletInfoContainer>
        </HeaderContainer>

        <RatingsContainer>
          <div>
            <span>Avaliações</span>
            <button type="button">Avaliar</button>
          </div>

          <RateCardContainer>
            <RateHeader>
              <UserContainer>
                <div>
                  <Image
                    src={'https://github.com/AronAdamsRapetto.png'}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>

                <div>
                  <span>Brandon botosh</span>
                  <span>Há 2 dias</span>
                </div>
              </UserContainer>

              <div>
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>
            </RateHeader>
            <span>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus
              leo. Sit porta eget nec vitae sit vulputate eget
            </span>
          </RateCardContainer>

          <RateCardContainer>
            <RateHeader>
              <UserContainer>
                <div>
                  <Image
                    src={'https://github.com/AronAdamsRapetto.png'}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>

                <div>
                  <span>Brandon botosh</span>
                  <span>Há 2 dias</span>
                </div>
              </UserContainer>

              <div>
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>
            </RateHeader>
            <span>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus
              leo. Sit porta eget nec vitae sit vulputate eget
            </span>
          </RateCardContainer>

          <RateCardContainer>
            <RateHeader>
              <UserContainer>
                <div>
                  <Image
                    src={'https://github.com/AronAdamsRapetto.png'}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>

                <div>
                  <span>Brandon botosh</span>
                  <span>Há 2 dias</span>
                </div>
              </UserContainer>

              <div>
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>
            </RateHeader>
            <span>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus
              leo. Sit porta eget nec vitae sit vulputate eget
            </span>
          </RateCardContainer>
        </RatingsContainer>
      </ContentContainer>
    </RadixDialog.Portal>
  )
}
