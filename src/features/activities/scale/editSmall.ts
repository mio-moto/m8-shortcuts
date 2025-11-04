import Data from '#assets/activity/scale/edit-small.json'
import Video from '#assets/activity/scale/edit-small.mp4'
import type { Activity } from '../../activity'

export const editSmall = {
  id: 'edit-small',
  title: 'Edit in small increments',
  description: 'Edits an instrument parameter in small steps.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
