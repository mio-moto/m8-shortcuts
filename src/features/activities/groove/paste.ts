import Video from '#assets/activity/groove/paste.webm'
import type { Activity } from '../../activity'

export const paste = {
  id: 'paste-value',
  title: 'Paste',
  description: 'When there are values in the clipboard, paste the selection and overwrites values.',
  media: { video: Video },
  keypress: [['shift', 'edit']],
  categories: ['selection'],
} as const satisfies Activity
