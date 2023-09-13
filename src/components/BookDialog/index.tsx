import Image from 'next/image'
import { useState } from 'react'

import * as RadixDialog from '@radix-ui/react-dialog'
import { BookOpen, BookmarkSimple, Check, Star, X } from 'phosphor-react'

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
  const [isFormOpen, setIsFormOpen] = useState(false)

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
            {isFormOpen ? (
              <></>
            ) : (
              <button type="button" onClick={() => setIsFormOpen(true)}>
                Avaliar
              </button>
            )}
          </div>

          {isFormOpen && (
            <div>
              <div>
                <div>
                  <Image
                    src={'https://github.com/AronAdamsRapetto.png'}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <span>Cristofer Rosser</span>
                </div>
                <div>
                  <Star size={24} />
                  <Star size={24} />
                  <Star size={24} />
                  <Star size={24} />
                  <Star size={24} />
                </div>
              </div>
              <textarea />
              <div>
                <button type="button">
                  <X size={24} />
                </button>
                <button type="button">
                  <Check size={24} />
                </button>
              </div>
            </div>
          )}

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
