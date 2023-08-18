import Image from 'next/image'

import { BookCard, BookCardInfo } from './styles'
import book from '../../../../../public/books/a-revolucao-dos-bixos.jpg'

export default function PopularBooksList() {
  const testList = [0, 1, 2]

  return (
    <>
      {testList.map((item) => (
        <BookCard key={item}>
          <Image src={book} alt="" />
          <BookCardInfo>
            <div>
              <span>A revolução dos bichos</span>
              <span>George Orwell</span>
            </div>
            <div>STARS</div>
          </BookCardInfo>
        </BookCard>
      ))}
    </>
  )
}
