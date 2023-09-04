import Image from 'next/image'

import { BookCard, BookCardInfo } from './styles'
import { PopularBook } from '../../index.page'
import { Star } from 'phosphor-react'

interface PopularBookCardProps {
  book: PopularBook
}

export default function PopularBookCard({ book }: PopularBookCardProps) {
  const ratingMap = [1, 2, 3, 4, 5]

  return (
    // Abrirá o dialog com o livro
    <BookCard>
      <Image
        src={`http://localhost:3000${book.coverUrl.replace(
          'public/images',
          '',
        )}`}
        width={100}
        height={100}
        alt=""
      />
      <BookCardInfo>
        <div>
          <span>{book.name}</span>
          <span>{book.author}</span>
        </div>
        <div>
          {ratingMap.map((value) => {
            if (book.rate >= value) {
              return <Star size={16} weight="fill" key={value} />
            } else {
              return <Star size={16} weight="regular" key={value} />
            }
          })}
        </div>
      </BookCardInfo>
    </BookCard>
  )
}
