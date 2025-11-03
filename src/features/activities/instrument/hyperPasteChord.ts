import Data from '#assets/activity/instrument/hyper-paste-chord.json'
import Video from '#assets/activity/instrument/hyper-paste-chord.mp4'
import type { Activity } from '../../activity'

export const hyperPasteChord = {
  id: 'hyper-paste-value',
  title: 'Paste',
  description: 'With the cursor on the chord, pastes the chord from the clipboard.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
