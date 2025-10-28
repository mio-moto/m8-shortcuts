import Screen from '#screens/limiter-scope.png'
import { scopeActivities } from '../activities/scope/_scopeActivities'
import type { M8Screen } from '../screen'

export const limiterScreen = {
  id: 'scope',
  name: 'Limiter & Mix Scope',
  img: Screen,
  categories: ['mixer'],
  description: 'Limiter scope shows the loudness dampening of the current audio loudness',
  activities: scopeActivities,
} as const satisfies M8Screen
