import Screen from '#screens/chain.png'
import { chainActivities } from '../activities/chain/_chainActivities'
import type { M8Screen } from '../screen'

export const chainScreen = {
  id: 'chain',
  name: 'Chain',
  img: Screen,
  categories: ['sequencer'],
  description: 'Stringing together phrases into a bar',
  activities: chainActivities,
} as const satisfies M8Screen
