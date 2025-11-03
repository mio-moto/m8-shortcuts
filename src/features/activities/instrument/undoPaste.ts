import Data from '#assets/activity/instrument/undo-paste.json'
import Video from '#assets/activity/instrument/undo-paste.mp4'
import type { Activity } from '../../activity'

export const undoPaste = {
  id: 'undo-paste',
  title: 'Undo Paste',
  description: 'The pasted instrument can be reverted back by releasing both keys and doing the same combination.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'edit'], 'after', ['shift', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
