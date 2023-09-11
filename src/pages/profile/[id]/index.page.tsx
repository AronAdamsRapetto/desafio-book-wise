import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { getDistanceToNow } from '@/utils/getDistanceToNow'
import { prisma } from '@/lib/prisma'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  Star,
  User,
  UserList,
} from 'phosphor-react'

import {
  InputContainer,
  LeftSide,
  PageContainer,
  PageWrapper,
  TitleContainer,
  RightSide,
  UserProfileHeader,
  RatingContainer,
  RatingCard,
  RatingFeedContainer,
  RatingHeader,
  UserAnalyticsContainer,
} from './styles'

interface Rating {
  createdAt: string
  description: string
  rate: number
  book: {
    id: string
    author: string
    coverUrl: string
    name: string
  }
}

interface ProfileUserData {
  name: string
  createdAt?: string
  image: string | null
  ratings?: Rating[]
}

interface ProfileProps {
  profileData: ProfileUserData
}

export default function Profile({ profileData }: ProfileProps) {
  const ratingMap = [1, 2, 3, 4, 5]

  return (
    <PageContainer>
      <TitleContainer>
        <User size={32} />
        <h1>Perfil</h1>
      </TitleContainer>

      <PageWrapper>
        <LeftSide>
          <InputContainer>
            <input type="text" placeholder="Buscar livro avaliado" />
            <MagnifyingGlass size={20} />
          </InputContainer>
          <RatingFeedContainer>
            {profileData.ratings?.map((rating) => (
              <RatingContainer key={rating.book.id}>
                <span>{getDistanceToNow(rating.createdAt)}</span>
                <RatingCard>
                  <RatingHeader>
                    <Image
                      src={`http://localhost:3000/${rating.book.coverUrl}`}
                      alt=""
                      width={98}
                      height={134}
                    />
                    <div>
                      <div>
                        <span>{rating.book.name}</span>
                        <span>{rating.book.author}</span>
                      </div>
                      <div>
                        {ratingMap.map((value) => {
                          if (rating.rate >= value) {
                            return <Star size={16} weight="fill" key={value} />
                          } else {
                            return (
                              <Star size={16} weight="regular" key={value} />
                            )
                          }
                        })}
                      </div>
                    </div>
                  </RatingHeader>
                  <p>{rating.description}</p>
                </RatingCard>
              </RatingContainer>
            ))}
          </RatingFeedContainer>
        </LeftSide>

        <RightSide>
          <UserProfileHeader>
            <div>
              <Image
                src={profileData.image ?? ''}
                alt=""
                width={72}
                height={72}
              />
            </div>

            <div>
              <span>{profileData.name}</span>
              <span>membro desde 2019</span>
            </div>
          </UserProfileHeader>

          <hr />

          <UserAnalyticsContainer>
            <div>
              <BookOpen size={32} />

              <div>
                <span>3853</span>
                <span>Páginas lidas</span>
              </div>
            </div>

            <div>
              <Books size={32} />

              <div>
                <span>10</span>
                <span>Livros avaliados</span>
              </div>
            </div>

            <div>
              <UserList size={32} />

              <div>
                <span>8</span>
                <span>Autores lidos</span>
              </div>
            </div>

            <div>
              <BookmarkSimple size={32} />

              <div>
                <span>Computação</span>
                <span>Categoria mais lida</span>
              </div>
            </div>
          </UserAnalyticsContainer>
        </RightSide>
      </PageWrapper>
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: { id },
  } = ctx

  if (typeof id === 'string') {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        name: true,
        created_at: true,
        image: true,
        ratings: {
          select: {
            created_at: true,
            description: true,
            rate: true,
            book: {
              select: {
                id: true,
                author: true,
                cover_url: true,
                name: true,
              },
            },
          },
        },
      },
    })

    if (user) {
      const { created_at: createdAt, ratings, ...userData } = user

      const orderedRatings: Rating[] = ratings
        .map(({ book, created_at: createdAt, ...rate }) => ({
          book: {
            coverUrl: book.cover_url,
            ...book,
          },
          createdAt: createdAt.toISOString(),
          ...rate,
        }))
        .sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return 1
          }
          if (a.createdAt > b.createdAt) {
            return -1
          }

          return 0
        })

      const profileData = {
        ...userData,
        createdAt: createdAt.toISOString(),
        ratings: orderedRatings,
      }

      return {
        props: { profileData },
      }
    }
  }

  return {
    notFound: true,
  }
}