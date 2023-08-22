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
import ActivityFeedCard from './components/ActivityFeedCard'
import { getDistanceToNow } from '@/utils/getDistanceToNow'
import PopularBookCard from './components/PopularBooksCard'

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

export type PopularBook = {
  id: string
  name: string
  author: string
  coverUrl: string
  rate: number
}

interface FeedProps {
  activities: Activity[]
  popularBooks: PopularBook[]
}

export default function Feed({ activities, popularBooks }: FeedProps) {
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
            <ActivityFeedCard key={activity.id} activity={activity} />
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
          {popularBooks.map((book) => (
            <PopularBookCard key={book.id} book={book} />
          ))}
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
      description:
        description.length > 180
          ? description.substring(0, 180) + '...'
          : description,
      ...rating,
    }),
  )

  const books = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  })

  const popularBooks = books.map(
    ({ cover_url: coverUrl, ratings, name, ...book }) => {
      const rate = ratings.reduce((value, { rate }, index) => {
        if (index < ratings.length - 1) {
          return (value += rate)
        }
        return (value += rate) / ratings.length
      }, 0)

      return {
        name: name.length > 34 ? name.substring(0, 29) + '...' : name,
        coverUrl,
        rate,
        ...book,
      }
    },
  )

  return {
    props: {
      activities,
      popularBooks: popularBooks.sort((a, b) => b.rate - a.rate).slice(0, 4),
    },
  }
}
