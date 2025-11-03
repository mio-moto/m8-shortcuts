import Data from '#assets/activity/instrument/continue-song.json'
import Video from '#assets/activity/instrument/continue-song.mp4'
import type { Activity } from '../../activity'

export const continuePlay = {
  id: 'continue-song',
  title: 'Continue song',
  description: 'Continues song at the cursor position.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
