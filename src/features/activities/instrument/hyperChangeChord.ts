import Video from '#assets/activity/instrument/hyper-change-chord.webm'
import type { Activity } from '../../activity'

export const hyperChangeChord = {
  id: 'hyper-add-note',
  title: 'Change Chord',
  description: 'With the cursor on the chord number, changes to another chord. Chords can be changed with the CRD command in a phrase or table.',
  media: { video: Video },
  keypress: [['edit', 'left'], 'or', ['edit', 'right'], 'or', ['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['hyper'],
} as const satisfies Activity
