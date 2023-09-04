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

export interface ActivityFeedCardProps {
  activity: Activity
}

export default function ActivityFeedCard({ activity }: ActivityFeedCardProps) {
  const ratingMap = [1, 2, 3, 4, 5]

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
        <Image
          src={`http://localhost:3000${activity.book.coverUrl.replace(
            'public/images',
            '',
          )}`}
          alt=""
          width={108}
          height={152}
        />
        <div>
          <span>{activity.book.name}</span>
          <span>{activity.book.author}</span>
          <DescriptionContainer>
            <span>{activity.description}</span>
            {activity.description.endsWith('...') && (
              <SeeMoreButton>Ver mais</SeeMoreButton>
            )}
          </DescriptionContainer>
        </div>
      </ActivityContent>
    </ActivityCard>
  )
}
