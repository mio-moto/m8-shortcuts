import Video from '#assets/activity/instrument/hyper-remove-note.webm'
import type { Activity } from '../../activity'

export const hyperRemoveNote = {
  id: 'hyper-remove-note',
  title: 'Remove Note from Chord',
  description: 'With the cursor on a hypersynth note, removes the note from the chord.',
  media: { video: Video },
  keypress: [['opt', 'edit']],
  categories: ['hyper'],
} as const satisfies Activity
