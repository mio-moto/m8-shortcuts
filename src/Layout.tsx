import type { FC } from 'react'
import FallbackScreen from '#assets/activity/no-screen-placeholder.png'
import { ActivitySelection } from './features/ActivitySelection'
import type { Activity } from './features/activity'
import { ScreenSelection } from './features/ScreenSelection'
import { type M8Screen, screens } from './features/screen'
import { useAppParams } from './features/useAppParams'

const Screen: FC<{ screen: M8Screen }> = ({ screen }) => {
  return (
    <div className="center">
      <img className="image" src={screen.img} />
      <div>{screen.description}</div>
    </div>
  )
}

const ActivityScreen: FC<{ screen: M8Screen; activity: Activity }> = ({ activity }) => {
  const media = activity.media ?? { img: FallbackScreen }
  return (
    <div className="center">
      {'img' in media && <img className="image" src={media.img} />}
      {'video' in media && <video className="image" src={media.video} autoPlay muted loop />}
      <div>{activity.description}</div>
    </div>
  )
}

export const Layout: FC = () => {
  const parameters = useAppParams()

  const screen = screens.find((x) => x.id === parameters.screen) ?? screens[0]
  const activity = parameters.activity && screen?.activities.find((x) => parameters.activity === x.id)

  return (
    <>
      <ActivitySelection />
      {activity ? <ActivityScreen activity={activity} screen={screen} /> : <Screen screen={screen} />}
      <ScreenSelection />
    </>
  )
}
