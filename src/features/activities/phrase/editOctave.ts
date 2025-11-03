import Data from '#assets/activity/phrase/edit-octave.json'
import Video from '#assets/activity/phrase/edit-octave.mp4'
import type { Activity } from '../../activity'

export const editOctave = {
  id: 'edit-octave',
  title: 'Edit Octave',
  description: 'With the cursor on the note, changes the octave on the note.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
