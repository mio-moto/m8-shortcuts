import Data from '#assets/activity/table/edit-note.json'
import Video from '#assets/activity/table/edit-note.mp4'
import type { Activity } from '../../activity'

export const editOctave = {
  id: 'edit-note',
  title: 'Edit note',
  description: 'With the cursor on the note, offsets the note by one.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
