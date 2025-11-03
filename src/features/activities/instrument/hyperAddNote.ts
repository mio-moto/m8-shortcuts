import Data from '#assets/activity/instrument/hyper-add-note.json'
import Video from '#assets/activity/instrument/hyper-add-note.mp4'
import type { Activity } from '../../activity'

export const hyperAddNote = {
  id: 'hyper-add-note',
  title: 'Add Note',
  description: 'With the cursor on top of a hypersynth note of a chord, adds a note into it.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right'], 'or', ['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['hyper'],
} as const satisfies Activity
