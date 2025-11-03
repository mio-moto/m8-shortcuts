import Data from '#assets/activity/instrument/hyper-copy-chord.json'
import Video from '#assets/activity/instrument/hyper-copy-chord.mp4'
import type { Activity } from '../../activity'

export const hyperCopyChord = {
  id: 'hyper-copy-chord',
  title: 'Copy Chord',
  description: 'With the cursor on the chord, copies the chord into the clipboard',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt']],
  categories: ['edit'],
} as const satisfies Activity
