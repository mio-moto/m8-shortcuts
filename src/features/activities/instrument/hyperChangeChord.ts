import Data from '#assets/activity/instrument/hyper-change-chord.json'
import Video from '#assets/activity/instrument/hyper-change-chord.mp4'
import type { Activity } from '../../activity'

export const hyperChangeChord = {
  id: 'hyper-change-chord',
  title: 'Change Chord',
  description: 'With the cursor on the chord number, changes to another chord. Chords can be changed with the CRD command in a phrase or table.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right'], 'or', ['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['hyper'],
} as const satisfies Activity
