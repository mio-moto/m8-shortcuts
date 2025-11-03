import Data from '#assets/activity/phrase/edit-note.json'
import Video from '#assets/activity/phrase/edit-note.mp4'
import type { Activity } from '../../activity'

export const editNote = {
  id: 'edit-note',
  title: 'Edit Note',
  description: 'With the cursor on the note, changes the note based on the scale of that track.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
