import Video from '#assets/activity/project/continue-play.webm'
import type { Activity } from '../../activity'

export const continuePlay = {
  id: 'continue-song',
  title: 'Continue song',
  description: 'Continues song at the cursor position.',
  media: { video: Video },
  keypress: ['play', ['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
