import Data from '#assets/activity/song/paste.json'
import Video from '#assets/activity/song/paste.mp4'
import type { Activity } from '../../activity'

export const paste = {
  id: 'paste-value',
  title: 'Paste',
  description: 'When there are values in the clipboard, paste the selection. Note: this moves the affected rows down in the song view.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'edit']],
  categories: ['selection'],
} as const satisfies Activity
