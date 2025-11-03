import Data from '#assets/activity/phrase/edit-small.json'
import Video from '#assets/activity/phrase/edit-small.mp4'
import type { Activity } from '../../activity'

export const editSmall = {
  id: 'edit-small',
  title: 'Edit in small increments',
  description: 'Edits a all values (notes, volume, instrument, fx command and fx value) in small increments.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
