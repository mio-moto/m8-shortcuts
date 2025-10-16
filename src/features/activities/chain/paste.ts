import Video from '#assets/activity/chain/paste.webm'
import type { Activity } from '../../activity'

export const paste = {
  id: 'paste-value',
  title: 'Paste',
  description: 'When there are values in the clipboard, paste the selection. Note: this moves the affected rows down in the song view.',
  media: { video: Video },
  keypress: [['shift', 'edit']],
  categories: ['selection'],
} as const satisfies Activity
