import Data from '#assets/activity/eq/mute-eq.json'
import Video from '#assets/activity/eq/mute-eq.mp4'
import type { Activity } from '../../activity'

export const muteEq = {
  id: 'mute-eq',
  title: 'Mute EQ',
  description: 'Enables / disables the current EQ',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'after', 'edit'],
  categories: ['misc'],
} as const satisfies Activity
