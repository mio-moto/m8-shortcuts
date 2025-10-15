import Screen from '#screens/render-audio.png'
import type { M8Screen } from '../screen'

export const renderAudioScreen = {
  id: 'render-audio',
  name: 'Modulators',
  img: Screen,
  categories: ['instrument'],
  description: 'Configures modulators for an instrument',
  activities: [],
} as const satisfies M8Screen
