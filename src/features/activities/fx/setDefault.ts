import Data from '#assets/activity/fx/set-default.json'
import Video from '#assets/activity/fx/set-default.mp4'
import type { Activity } from '../../activity'

export const setDefault = {
  id: 'set-default',
  title: 'Set default value',
  description: 'Sets the default value for the highlighted setting',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'opt']],
  categories: ['edit'],
} as const satisfies Activity
