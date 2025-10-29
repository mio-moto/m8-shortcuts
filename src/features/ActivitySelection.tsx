import { css, cx } from '@linaria/core'
import { type FC, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FallbackImage from '#assets/activity/no-screen-placeholder.png'
import { fragments } from '../app/style/fragments'
import { style } from '../app/style/style'
import { KeyCombo } from '../components/KeyCombo'
import { type Activity, type ActivityCategoryId, activityCategories, type ActivityCategory as M8ActivityCategory } from './activity'
import { type M8Screen, screens } from './screen'
import { useAppParams } from './useAppParams'

const entryClass = css`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  opacity: 0.65;
  transition: ${fragments.transition.regular('opacity')}, ${fragments.transition.regular('background-color')};
  z-index: -1;
  &:hover {
    opacity: 0.85;
    background-color: ${style.themeColors.background.defaultHover};
  }

  > h3 {
    margin: 0;
    display: flex;
    align-items: center;
    > .title {
      flex: 1;
    }
  }

  > img {
    max-width: 100%;
  }

  &.active {
    cursor: unset;
    opacity: 1.0;
    background-color: ${style.themeColors.background.defaultHover};
    > h3 { 
      color: ${style.themeColors.text.important};
    }
  }
`

const ActivityEntry: FC<{ activity: Activity; screen: M8Screen }> = ({ activity, screen }) => {
  const navigate = useNavigate()
  const params = useAppParams()

  return (
    <div
      className={cx(entryClass, 'entry', params.activity === activity.id && params.screen === screen.id && 'active')}
      onClick={(evt) => {
        evt.stopPropagation()
        navigate(`/${screen.id}/${activity.id}`)
      }}
    >
      <h3>
        <span className="title">{activity.title}</span>
        <span className="combo">
          <KeyCombo keypress={activity.keypress} id={`${screen.id}-${activity.id}`} />
        </span>
      </h3>
      {!activity.media && false && <img src={FallbackImage} />}
    </div>
  )
}

const categoryClass = css`
  scrollbar-gutter: stable;
  isolation: isolate;

  > h2 {
    background-color: ${style.themeColors.background.default};
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 4px;
    margin: 0;
    border-bottom: 2px solid ${style.themeColors.line.default};
  }
`

export const ActivityCategory: FC<{ screen?: M8Screen; category: M8ActivityCategory; open: boolean; onOpenChange: (open: boolean) => void }> = ({
  screen,
  category,
  open,
  onOpenChange,
}) => {
  if (!screen) {
    return undefined
  }

  const activities = screen.activities.filter((x) => x.categories.some((activityCategory) => activityCategory === category.id))

  return (
    <div className={cx(categoryClass, 'category', open && 'open')} onClick={() => onOpenChange(!open)}>
      <h2>{category.title}</h2>
      {activities.map((x) => (
        <ActivityEntry key={`${category}-${x.id}`} screen={screen} activity={x} />
      ))}
    </div>
  )
}

const selectionClass = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
  width: fit-content;
  min-width: 300px;
  margin-left: 20px;
  overflow-y: scroll;
  > h3 {
    margin: 0 0 15px 0;
  }

  @media(min-width: 2200px) {
    margin-left: 100px;
  }

  @media(min-width: 2500px) {
    margin-left: 10%;
  }
`

export const ActivitySelection: FC = () => {
  const [open, setOpen] = useState<ActivityCategoryId>()
  const composeOpenChangeHandler = useCallback(
    (category: ActivityCategoryId) => (value: boolean) => {
      if (value) {
        setOpen(category)
      } else if (open === category) {
        setOpen(undefined)
      }
    },
    [open],
  )

  const { screen } = useAppParams()

  const { screen: usedScreen, categories } = useMemo(() => {
    const usedScreen = screen && screens.find((x) => x.id === screen)
    if (!usedScreen) {
      return { screen: undefined, categories: [] }
    }
    return {
      screen: usedScreen,
      categories: activityCategories.filter((category) =>
        usedScreen.activities.some((activity) => activity.categories.some((activityCategory) => activityCategory === category.id)),
      ),
    }
  }, [screen])
  return (
    <div className={selectionClass}>
      {categories.map((x) => (
        <ActivityCategory key={x.id} screen={usedScreen} category={x} open={true} onOpenChange={composeOpenChangeHandler(x.id)} />
      ))}
    </div>
  )
}
