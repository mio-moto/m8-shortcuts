import Data from '#assets/activity/phrase/fill.json'
import Video from '#assets/activity/phrase/fill.mp4'
import type { Activity } from '../../activity'

export const fillNotes = {
  id: 'fill-notes',
  title: 'Fill Notes',
  description: 'When the selection includes notes, fills the selection with notes.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'left']],
  categories: ['edit'],
} as const satisfies Activity
