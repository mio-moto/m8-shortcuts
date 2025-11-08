import { css, cx } from '@linaria/core'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { fragments } from '../app/style/fragments'
import { style } from '../app/style/style'
import { type CategoryId, categoryNameById, type M8Screen, screensByCategory } from './screen'
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

const ScreenEntry: FC<{ screen: M8Screen }> = ({ screen }) => {
  const params = useAppParams()
  const navigate = useNavigate()
  return (
    <div
      className={cx(entryClass, 'entry', params.screen === screen.id && 'active')}
      onClick={(evt) => {
        evt.stopPropagation()
        navigate(`/${screen.id}`)
      }}
    >
      <h3>{screen.name}</h3>
      {/* <img src={screen.img} /> */}
    </div>
  )
}

const categoryClass = css`  
  transition: ${fragments.transition.regular('height')};
  scrollbar-gutter: stable;
  isolation: isolate;
  > h2 {
    cursor: pointer;
    background-color: ${style.themeColors.background.default};
    position: sticky;
    z-index: 3;
    display: flex;
    align-items: center;
    top: 25px;
    padding: 24px 16px 4px 4px;
    margin: 0;
    border-bottom: 2px solid ${style.themeColors.line.default};
  }
`

const ScreenCategory: FC<{ category: CategoryId }> = ({ category }) => {
  const screens = screensByCategory[category].filter((x) => x.activities.length > 0)
  return (
    <div className={cx(categoryClass, 'category', 'open')}>
      <h2>{categoryNameById[category]}</h2>
      {screens.map((x, _i) => (
        <ScreenEntry key={`${category}-${x.id}`} screen={x} />
      ))}
    </div>
  )
}

const selectionClass = css`
  position: relative;
  background: ${style.themeColors.background.default};

  > .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
    width: max-content;
    max-width: 550px;
    margin-left: 20px;
    max-height: calc(100vh - 45px);
    overflow-y: scroll;
    > h3 {
      margin: 0 0 15px 0;
    }
  }

  > .sidebar-title {
    display: none;
  }

  @media (max-width: 1300px) {
    & {
      max-width: 30px;
      padding-right: 0px;
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
        left: 10px;
        opacity: 0;
        transform: translateX(-100%);
        transition: 0.25s ease transform, 0.25s 0.1s ease opacity;
        pointer-events: none;
        padding-right: 30px;
        padding-left: 10px;
        border-right: 1px solid ${style.themeColors.line.default};
        min-height: 100vh;
        max-width: calc(90vw - 125px);

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

export const ScreenSelection: FC = () => {
  return (
    <div className={cx(selectionClass)}>
      <div className="content">
        <div className="sticky-fill" />
        <ScreenCategory category="system" />
        <ScreenCategory category="sequencer" />
        <ScreenCategory category="instrument" />
        <ScreenCategory category="mixer" />
      </div>
      <h3 className="sidebar-title">Screens</h3>
    </div>
  )
}
