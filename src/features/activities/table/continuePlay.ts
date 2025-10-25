import Video from '#assets/activity/table/continue-play.webm'
import type { Activity } from '../../activity'

export const continuePlay = {
  id: 'continue-song',
  title: 'Continue song',
  description: 'Continues song at the cursor position.',
  media: { video: Video },
  keypress: [['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
