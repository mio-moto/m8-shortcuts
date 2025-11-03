import Data from '#assets/activity/instrument/paste.json'
import Video from '#assets/activity/instrument/paste.mp4'
import type { Activity } from '../../activity'

export const paste = {
  id: 'paste-value',
  title: 'Paste',
  description: 'The copied instrument is pasted into the current instrument slot. Release both buttons and repeat to undo.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
