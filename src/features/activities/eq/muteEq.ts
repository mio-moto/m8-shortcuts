import Video from '#assets/activity/eq/mute-eq.webm'
import type { Activity } from '../../activity'

export const muteEq = {
  id: 'mute-eq',
  title: 'Mute EQ',
  description: 'Enables / disables the current EQ',
  media: { video: Video },
  keypress: ['edit', 'after', 'edit'],
  categories: ['misc'],
} as const satisfies Activity
