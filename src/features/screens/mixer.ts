import Screen from '#screens/mixer.png'
import { mixerActivities } from '../activities/mixer/_mixerActivities'
import type { M8Screen } from '../screen'

export const mixerScreen = {
  id: 'mixer',
  name: 'Mixer',
  img: Screen,
  categories: ['mixer'],
  description: 'Mixer for individual channels, incoming audio and audio fx, limiter and OTT.',
  activities: mixerActivities,
} as const satisfies M8Screen
