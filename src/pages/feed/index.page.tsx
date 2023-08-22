import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import {
  LeftSide,
  PageContainer,
  PageWrapper,
  RigthSide,
  TitleContainer,
} from './styles'
import { prisma } from '../../lib/prisma'
import ActivityList from './components/ActivityList'
import PopularBooksList from './components/PopularBooksList'
import { getDistanceToNow } from '@/utils/getDistanceToNow'

export type Activity = {
  id: string
  description: string
  rate: number
  createdAt: string
  user: {
    image?: string
    name: string
  }
  book: {
    coverUrl: string
    name: string
    author: string
  }
}

interface FeedProps {
  activities: Activity[]
}

export default function Feed({ activities }: FeedProps) {
  const activityList = activities.map((activity) => {
    const { createdAt, ...activityKeys } = activity

    return {
      createdAt: getDistanceToNow(createdAt),
      ...activityKeys,
    }
  })

  return (
    <PageContainer>
      <TitleContainer>
        <ChartLineUp size={32} weight="regular" />
        <h1>Início</h1>
      </TitleContainer>

      <PageWrapper>
        <LeftSide>
          <span>Avaliações mais recentes</span>
          {activityList.map((activity) => (
            <ActivityList key={activity.id} activity={activity} />
          ))}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const ratings = await prisma.rating.findMany({
    select: {
      id: true,
      description: true,
      rate: true,
      created_at: true,
      user: {
        select: {
          image: true,
          name: true,
        },
      },
      book: {
        select: {
          name: true,
          author: true,
          cover_url: true,
        },
      },
    },
    orderBy: { created_at: 'desc' },
  })

  const activities = ratings.map(
    ({ created_at: createdAt, book, description, ...rating }) => ({
      book: {
        coverUrl: book.cover_url,
        ...book,
      },
      createdAt: createdAt.toISOString(),
      ...rating,
      description:
        description.length > 180
          ? description.substring(0, 180) + '...'
          : description,
    }),
  )

  return { props: { activities } }
}
