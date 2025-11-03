import Data from '#assets/activity/mixer/edit-small.json'
import Video from '#assets/activity/mixer/edit-small.mp4'
import type { Activity } from '../../activity'

export const enterLimiterScope = {
  id: 'enter-limiter-scope',
  title: 'Enter Limiter Scope',
  description:
    'With the cursor on the LIM, DJF or OTT parameter, enters the limiter scope. It details how the limiter operates and allows for tuning the limiter parameters.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'after', 'edit'],
  categories: ['navigation'],
} as const satisfies Activity
