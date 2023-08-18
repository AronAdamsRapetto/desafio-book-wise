import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import {
  LeftSide,
  PageContainer,
  PageWrapper,
  RigthSide,
  TitleContainer,
} from './styles'
import ActivityList from './components/ActivityList'
import PopularBooksList from './components/PopularBooksList'

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
          <ActivityList />
        </LeftSide>

        <RigthSide>
          <div>
            <span>Livros populares</span>
            <Link href="/explore">
              <span>Ver todos</span>
              <CaretRight size={16} weight="regular" />
            </Link>
          </div>
          <PopularBooksList />
        </RigthSide>
      </PageWrapper>
    </PageContainer>
  )
}
