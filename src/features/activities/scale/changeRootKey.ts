import Data from '#assets/activity/scale/edit-root-key.json'
import Video from '#assets/activity/scale/edit-root-key.mp4'
import type { Activity } from '../../activity'

export const changeRootKey = {
  id: 'change-root-key',
  title: 'Change Root Key',
  description: 'When the key-entry is selected, offsets the root key to the desired note',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right'], 'or', ['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
