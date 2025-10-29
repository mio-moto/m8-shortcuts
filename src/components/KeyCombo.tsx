import type { FC } from 'react'
import AddIcon from '#assets/icons/add.svg'
import ArrowRightIcon from '#assets/icons/arrow-right.svg'
import TouchIcon from '#assets/icons/pan-tool.svg'
import type { Activity } from '../features/activity'
import { Icon } from './Icon'
import { Keypress } from './Keypress'

export const KeyCombo: FC<{ keypress: Activity['keypress']; id: string }> = ({ keypress, id }) => {
  if (!Array.isArray(keypress)) {
    return <Keypress keys={keypress} />
  }

  return (
    <>
      {keypress.map((key, i) => {
        if (key === 'after') {
          return <Icon key={`${id}-${i}-${key}`} icon={ArrowRightIcon} />
        }
        if (key === 'and') {
          return <Icon key={`${id}-${i}-${key}`} icon={AddIcon} />
        }
        if (key === 'or') {
          return ' | '
        }
        if (key === 'hold') {
          return 'HOLD'
        }
        if (key === '2x') {
          return '2x'
        }
        if (key === '3x') {
          return '3x'
        }
        if (key === 'touch') {
          return <Icon key={`${id}-${i}-${key}`} icon={TouchIcon} />
        }
        if (key === 'midi') {
          return 'MIDI'
        }
        // biome-ignore lint/suspicious/noArrayIndexKey: static screen anyway
        return <Keypress key={`${id}-${i}`} keys={key} />
      })}
    </>
  )
}
