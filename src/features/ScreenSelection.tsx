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
    top: 0;
    display: flex;
    align-items: center;
    padding: 4px 16px 4px 4px;
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
  display: flex;
  flex: 1;
  max-width: 550px;
  flex-direction: column;
  justify-content: flex-start;
  width: fit-content;
  min-width: fit-content;
  gap: 16px; 
  min-height: 0;
  margin-right: 20px;
  overflow-y: scroll;
  scrollbar-gutter: stable;
  padding: 45px 0 0 32px;

  > h3 {
    margin: 0 0 15px 0;
  }
`

export const ScreenSelection: FC = () => {
  return (
    <div className={cx('right', selectionClass)}>
      <ScreenCategory category="system" />
      <ScreenCategory category="sequencer" />
      <ScreenCategory category="instrument" />
      <ScreenCategory category="mixer" />
    </div>
  )
}
