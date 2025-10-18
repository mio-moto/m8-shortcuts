import Video from '#assets/activity/phrase/edit-octave.webm'
import type { Activity } from '../../activity'

export const editOctave = {
  id: 'edit-octave',
  title: 'Edit Octave',
  description: 'With the cursor on the note, changes the octave on the note.',
  media: { video: Video },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
