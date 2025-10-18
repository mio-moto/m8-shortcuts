import Video from '#assets/activity/phrase/randomize-notes.webm'
import type { Activity } from '../../activity'

export const randomizeNotes = {
  id: 'randomize-notes',
  title: 'Randomize Notes',
  description: 'When the selection includes notes, randomizes the note value up or down.',
  media: { video: Video },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['edit'],
} as const satisfies Activity
