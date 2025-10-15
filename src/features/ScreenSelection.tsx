import { css, cx } from '@linaria/core'
import { type FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChevronRightIcon from '#assets/icons/chevron-right.svg'
import { fragments } from '../app/style/fragments'
import { style } from '../app/style/style'
import { Icon } from '../components/Icon'
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
  console.log(params)
  return (
    <div
      className={cx(entryClass, 'entry', params.screen === screen.id && 'active')}
      onClick={(evt) => {
        evt.stopPropagation()
        navigate(`/${screen.id}`)
      }}
    >
      <h3>
        {screen.name} - {screen.activities.length} activities
      </h3>
      <img src={screen.img} />
    </div>
  )
}

const categoryClass = css`  
  interpolate-size: allow-keywords;
  height: 52px;
  min-height: 52px;
  transition: ${fragments.transition.regular('height')};
  overflow-y: hidden;
  scrollbar-gutter: stable;
  isolation: isolate;
  > h2 {
    cursor: pointer;
    background-color: ${style.themeColors.background.default};
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    padding: 4px;
    margin: 0;
    border-bottom: 2px solid ${style.themeColors.line.default};
    > .icon {
      transition: ${fragments.transition.regular('transform')};
    }
  }

  &.open { 
    height: auto;
    overflow-y: scroll;

    > h2 > .icon {
      transform: rotate(90deg);
    }
  }

`

const ScreenCategory: FC<{ category: CategoryId; open: boolean; onOpenChange: (open: boolean) => void }> = ({ category, open, onOpenChange }) => {
  const screens = screensByCategory[category]
  return (
    <div className={cx(categoryClass, 'category', open && 'open')} onClick={() => onOpenChange(!open)}>
      <h2>
        <Icon icon={ChevronRightIcon} size="l" />
        {categoryNameById[category]}
      </h2>
      {screens.map((x, _i) => (
        <ScreenEntry key={`${category}-${x.id}`} screen={x} />
      ))}
    </div>
  )
}

const selectionClass = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px; 
  min-height: 0;
  margin-right: 10%;

  > h3 {
    margin: 0 0 15px 0;
  }
`

export const ScreenSelection: FC = () => {
  const [open, setOpen] = useState<CategoryId>()

  return (
    <div className={cx('right', selectionClass)}>
      <ScreenCategory
        category="misc"
        open={open === 'misc'}
        onOpenChange={(value) => {
          if (value) {
            setOpen('misc')
          } else if (open === 'misc') {
            setOpen(undefined)
          }
        }}
      />
      <ScreenCategory
        category="system"
        open={open === 'system'}
        onOpenChange={(value) => {
          if (value) {
            setOpen('system')
          } else if (open === 'system') {
            setOpen(undefined)
          }
        }}
      />
      <ScreenCategory
        category="sequencer"
        open={open === 'sequencer'}
        onOpenChange={(value) => {
          if (value) {
            setOpen('sequencer')
          } else if (open === 'sequencer') {
            setOpen(undefined)
          }
        }}
      />
      <ScreenCategory
        category="instrument"
        open={open === 'instrument'}
        onOpenChange={(value) => {
          if (value) {
            setOpen('instrument')
          } else if (open === 'instrument') {
            setOpen(undefined)
          }
        }}
      />
      <ScreenCategory
        category="mixer"
        open={open === 'mixer'}
        onOpenChange={(value) => {
          if (value) {
            setOpen('mixer')
          } else if (open === 'mixer') {
            setOpen(undefined)
          }
        }}
      />
    </div>
  )
}
