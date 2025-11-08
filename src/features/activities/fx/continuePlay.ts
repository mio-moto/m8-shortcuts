import Data from '#assets/activity/fx/continue-play.json'
import Video from '#assets/activity/fx/continue-play.mp4'
import type { Activity } from '../../activity'

export const continuePlay = {
  id: 'continue-song',
  title: 'Continue song',
  description: 'Continues song at the cursor position.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['play', 'or', ['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
