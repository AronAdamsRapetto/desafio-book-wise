import Image from 'next/image'

import {
  ActivityCard,
  ActivityContent,
  ActivityHeader,
  ActivityUserInfo,
  DescriptionContainer,
  SeeMoreButton,
} from './styles'
import { Activity } from '../../index.page'
import { Star } from 'phosphor-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface ActivityFeedCardProps {
  activity: Activity
}

export default function ActivityFeedCard({ activity }: ActivityFeedCardProps) {
  const ratingMap = [1, 2, 3, 4, 5]
  const bookImageUrl = `http://localhost:3000/${activity.book.coverUrl}`
  const [descriptionText, setDescriptionText] = useState(activity.description)

  useEffect(() => {
    function handleResize() {
      const descriptionWords = activity.description.split(' ')

      if (window.innerWidth <= 1331 && window.innerWidth > 1223) {
        setDescriptionText(
          descriptionWords.length > 30
            ? descriptionWords.slice(0, 30).join(' ') + '...'
            : descriptionWords.join(' '),
        )
      } else if (window.innerWidth <= 1223 && window.innerWidth > 1102) {
        console.log(window.innerWidth)
        setDescriptionText(
          descriptionWords.length > 18
            ? descriptionWords.slice(0, 18).join(' ') + '...'
            : descriptionWords.join(' '),
        )
      } else if (window.innerWidth <= 1102 || window.innerWidth > 1331) {
        setDescriptionText(activity.description)
      }
    }
    console.log('loop')

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [descriptionText, activity.description])
  return (
    <ActivityCard key={activity.id}>
      <ActivityHeader>
        <ActivityUserInfo>
          <div>
            <Image
              src={activity.user.image ?? ''}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div>
            <Link href="/profile">
              <span>{activity.user.name}</span>
            </Link>
            <span>{activity.createdAt}</span>
          </div>
        </ActivityUserInfo>
        <div>
          {ratingMap.map((value) => {
            if (activity.rate >= value) {
              return <Star size={16} weight="fill" key={value} />
            } else {
              return <Star size={16} weight="regular" key={value} />
            }
          })}
        </div>
      </ActivityHeader>

      <ActivityContent>
        <Image src={bookImageUrl} alt="" width={108} height={152} />
        <div>
          <span>{activity.book.name}</span>
          <span>{activity.book.author}</span>
          <DescriptionContainer>
            <span>{descriptionText}</span>
            {descriptionText.endsWith('...') && (
              <SeeMoreButton>Ver mais</SeeMoreButton>
            )}
          </DescriptionContainer>
        </div>
      </ActivityContent>
    </ActivityCard>
  )
}
