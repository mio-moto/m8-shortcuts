import Data from '#assets/activity/chain/continue-track.json'
import Video from '#assets/activity/chain/continue-track.mp4'
import type { Activity } from '../../activity'

export const continuePlay = {
  id: 'continue-song',
  title: 'Continue song',
  description: 'Continues song at the cursor position.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
