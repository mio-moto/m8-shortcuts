import Screen from '#screens/mixer.png'
import type { M8Screen } from '../screen'

export const mixerScreen = {
  id: 'mixer',
  name: 'Mixer',
  img: Screen,
  categories: ['mixer'],
  description: 'Mixer for individual channels, incoming audio and audio fx, limiter and OTT.',
  activities: [],
} as const satisfies M8Screen
