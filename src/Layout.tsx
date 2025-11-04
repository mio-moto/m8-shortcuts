import type { FC } from 'react'
import FallbackScreen from '#assets/activity/no-screen-placeholder.png'
import { ActivitySelection } from './features/ActivitySelection'
import type { Activity } from './features/activity'
import { M8Player } from './features/M8Player'
import { ScreenSelection } from './features/ScreenSelection'
import { type M8Screen, screens } from './features/screen'
import { useAppParams } from './features/useAppParams'

const ActivityScreen: FC<{ screen: M8Screen; activity?: Activity }> = ({ screen, activity }) => {
  const usedActivity = activity ?? screen.activities[0]
  const media = usedActivity?.media ?? { img: FallbackScreen }

  const mediaData = 'img' in media ? { type: 'image' as const, img: media.img } : { type: 'video' as const, video: media.video, events: media.events }

  return <M8Player title={usedActivity.title} media={mediaData} description={usedActivity.description} />
}

export const Layout: FC = () => {
  const parameters = useAppParams()

  const screen = screens.find((x) => x.id === parameters.screen) ?? screens[0]
  const activity = parameters.activity ? screen?.activities.find((x) => parameters.activity === x.id) : undefined

  return (
    <>
      <ActivitySelection />
      <ActivityScreen screen={screen} activity={activity} />
      <ScreenSelection />
    </>
  )
}
