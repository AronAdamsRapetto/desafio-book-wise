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
import Image from 'next/image'
import image from '../../../public/books/entendendo-algoritmos.jpg'

export default function Profile() {
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
            <RatingContainer>
              <span>Há 2 dias</span>
              <RatingCard>
                <RatingHeader>
                  <Image src={image} alt="" />
                  <div>
                    <div>
                      <span>Entendendo algoritmos</span>
                      <span>Aditya Bhargava</span>
                    </div>
                    <div>
                      {ratingMap.map((value) => {
                        return <Star size={16} key={value} />
                      })}
                    </div>
                  </div>
                </RatingHeader>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, enim? Dolorem repellendus laboriosam nulla quia
                  numquam dolores labore dolorum magnam! Corrupti itaque vero
                  error magnam ea qui molestias, provident alias!
                </p>
              </RatingCard>
            </RatingContainer>

            <RatingContainer>
              <span>Há 2 dias</span>
              <RatingCard>
                <RatingHeader>
                  <Image src={image} alt="" />
                  <div>
                    <div>
                      <span>Entendendo algoritmos</span>
                      <span>Aditya Bhargava</span>
                    </div>
                    <div>
                      {ratingMap.map((value) => {
                        return <Star size={16} key={value} />
                      })}
                    </div>
                  </div>
                </RatingHeader>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, enim? Dolorem repellendus laboriosam nulla quia
                  numquam dolores labore dolorum magnam! Corrupti itaque vero
                  error magnam ea qui molestias, provident alias!
                </p>
              </RatingCard>
            </RatingContainer>

            <RatingContainer>
              <span>Há 2 dias</span>
              <RatingCard>
                <RatingHeader>
                  <Image src={image} alt="" />

                  <div>
                    <div>
                      <span>Entendendo algoritmos</span>
                      <span>Aditya Bhargava</span>
                    </div>

                    <div>
                      {ratingMap.map((value) => {
                        return <Star size={16} key={value} />
                      })}
                    </div>
                  </div>
                </RatingHeader>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, enim? Dolorem repellendus laboriosam nulla quia
                  numquam dolores labore dolorum magnam! Corrupti itaque vero
                  error magnam ea qui molestias, provident alias!
                </p>
              </RatingCard>
            </RatingContainer>
          </RatingFeedContainer>
        </LeftSide>

        <RightSide>
          <UserProfileHeader>
            <div>
              <Image
                src={'https://github.com/AronAdamsRapetto.png'}
                alt=""
                width={72}
                height={72}
              />
            </div>

            <div>
              <span>Cristofer Rosser</span>
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
