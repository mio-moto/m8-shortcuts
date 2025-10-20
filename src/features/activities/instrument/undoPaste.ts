import Video from '#assets/activity/instrument/paste-undo.webm'
import type { Activity } from '../../activity'

export const undoPaste = {
  id: 'undo-paste',
  title: 'Undo Paste',
  description: 'The pasted instrument can be reverted back by releasing both keys and doing the same combination.',
  media: { video: Video },
  keypress: [['shift', 'edit'], 'after', ['shift', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
