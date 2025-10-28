import Video from '#assets/activity/mixer/edit-small.webm'
import type { Activity } from '../../activity'

export const enterMixScope = {
  id: 'enter-mix-scope',
  title: 'Enter Mix Scope',
  description:
    'With the cursor on the MIX parameter, enters the limiter scope. It details how the limiter operates and allows for tuning the limiter parameters.',
  media: { video: Video },
  keypress: ['edit', 'after', 'edit'],
  categories: ['navigation'],
} as const satisfies Activity
