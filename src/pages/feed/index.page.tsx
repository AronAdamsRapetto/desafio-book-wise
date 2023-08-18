import Image from 'next/image'

import { ChartLineUp } from 'phosphor-react'

import {
  ActivityCard,
  ActivityContent,
  ActivityHeader,
  ActivityUserInfo,
  LeftSide,
  PageContainer,
  PageWrapper,
  RigthSide,
  TitleContainer,
} from './styles'

import book from '../../../public/books/o-hobbit.png'

export default function Feed() {
  return (
    <PageContainer>
      <TitleContainer>
        <ChartLineUp size={32} weight="regular" />
        <h1>Início</h1>
      </TitleContainer>

      <PageWrapper>
        <LeftSide>
          <span>Avaliações mais recentes</span>
          <ActivityCard>
            <ActivityHeader>
              <ActivityUserInfo>
                <div>
                  <Image src={''} alt="" />
                </div>
                <div>
                  <span>Jaxson Dias</span>
                  <span>Hoje</span>
                </div>
              </ActivityUserInfo>
              <span>STARS</span>
            </ActivityHeader>

            <ActivityContent>
              <Image src={book} alt="" />
              <div>
                <span>O Hobbit</span>
                <span>J.R.R. Tolkien</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita vel veniam natus pariatur nobis vitae sequi aliquam
                  facilis culpa! Facilis deleniti quos veritatis eius nemo
                  tempora doloribus natus maiores laborum!
                </p>
              </div>
            </ActivityContent>
          </ActivityCard>
        </LeftSide>

        <RigthSide>
          <span>Livros populares</span>
        </RigthSide>
      </PageWrapper>
    </PageContainer>
  )
}
