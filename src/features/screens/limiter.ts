import Screen from '#screens/limiter-scope.png'
import type { M8Screen } from '../screen'

export const limiterScreen = {
  id: 'limiter-scope',
  name: 'Limiter',
  img: Screen,
  categories: ['mixer'],
  description: 'Limiter scope shows the loudness dampening of the current audio loudness',
  activities: [],
} as const satisfies M8Screen
