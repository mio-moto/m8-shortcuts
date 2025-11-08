import { css, cx } from '@linaria/core'
import { type FC, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import FallbackImage from '#assets/activity/no-screen-placeholder.png'
import { fragments } from '../app/style/fragments'
import { style } from '../app/style/style'
import { KeyCombo } from '../components/KeyCombo'
import { type Activity, activityCategories, type ActivityCategory as M8ActivityCategory } from './activity'
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

  @media (max-width: 1600px) {
    border-bottom: 1px solid ${style.themeColors.line.default};
  }

  > h3 {
    margin: 0;
    display: flex;
    align-items: center;

    @media (max-width: 1600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    > .title {
      flex: 1;
    }

    > .combo {
      display: flex;
      align-items: center;
      gap: 4px;
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
    top: 25px;
    padding: 24px 4px 4px 4px;
    margin: 0;
    border-bottom: 2px solid ${style.themeColors.line.default};
  }
`

export const ActivityCategory: FC<{ screen?: M8Screen; category: M8ActivityCategory }> = ({ screen, category }) => {
  if (!screen) {
    return undefined
  }

  const activities = screen.activities.filter((x) => x.categories.some((activityCategory) => activityCategory === category.id))

  return (
    <div className={cx(categoryClass, 'category')}>
      <h2>{category.title}</h2>
      {activities.map((x) => (
        <ActivityEntry key={`${category}-${x.id}`} screen={screen} activity={x} />
      ))}
    </div>
  )
}

const activityClass = css`
  position: relative;
  background: ${style.themeColors.background.default};

  > .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
    width: fit-content;
    max-width: 550px;
    max-height: 100vh;
    margin-left: 20px;
    overflow-y: scroll;
    > h3 {
      margin: 0 0 15px 0;
    }
  }

  > .sidebar-title {
    display: none;
  }

  @media (max-width: 1600px) {
    & {
      max-width: 30px;
      padding-right: 30px;
      border-left: 1px solid ${style.themeColors.line.default};

      > .sidebar-title {
        display: block;
        transform: translateX(5px) rotate(90deg);
        padding-left: 30px;
        z-index: 2;
      }

      > .content {
        z-index: 1;
        position: absolute;
        background: ${style.themeColors.background.default};
        left: 20px;
        opacity: 0;
        transform: translateX(-100%);
        max-width: calc(90vw - 125px);
        transition: 0.25s ease transform, 0.25s 0.1s ease opacity;
        pointer-events: none;
        padding-right: 30px;
        border-right: 1px solid ${style.themeColors.line.default};
        min-height: calc(100% - 45px);

        > .sticky-fill {
          z-index: 2;
          min-height: 25px;
          width: 100%;
          position: sticky;
          top: 0;
          background-color: ${style.themeColors.background.default};
        }
      }

      &:hover, &>.content:hover {
        overflow-x: visible;
        > .content {
          opacity: 1;
          transform: translateX(0);
          pointer-events: all;
        }
      }
    }
  }
`

export const ActivitySelection: FC = () => {
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
    <div className={activityClass}>
      <div className="content">
        <div className="sticky-fill" />
        {categories.map((x) => (
          <ActivityCategory key={x.id} screen={usedScreen} category={x} />
        ))}
      </div>
      <h3 className="sidebar-title">Activities</h3>
    </div>
  )
}
