import Image from 'next/image'

import {
  ActivityCard,
  ActivityContent,
  ActivityHeader,
  ActivityUserInfo,
} from './styles'
import book from '../../../../../public/books/o-hobbit.png'

export default function ActivityList() {
  const testList = [0, 1, 2, 3]

  return (
    <>
      {testList.map((item) => (
        <ActivityCard key={item}>
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
                facilis culpa! Facilis deleniti quos veritatis eius nemo tempora
                doloribus natus maiores laborum!
              </p>
            </div>
          </ActivityContent>
        </ActivityCard>
      ))}
    </>
  )
}
