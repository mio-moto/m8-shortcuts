import Video from '#assets/activity/song/paste.webm'
import type { Activity } from '../../activity'

export const paste = {
  id: 'paste-value',
  title: 'Paste',
  description: 'When there are values in the clipboard, paste the selection. Note: this moves the affected rows down in the song view.',
  media: { video: Video },
  keypress: [['shift', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
