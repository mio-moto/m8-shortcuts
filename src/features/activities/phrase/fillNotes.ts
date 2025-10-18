import Video from '#assets/activity/phrase/fill-notes.webm'
import type { Activity } from '../../activity'

export const fillNotes = {
  id: 'fill-notes',
  title: 'Fill Notes',
  description: 'When the selection includes notes, fills the selection with notes.',
  media: { video: Video },
  keypress: [['opt', 'left']],
  categories: ['edit'],
} as const satisfies Activity
