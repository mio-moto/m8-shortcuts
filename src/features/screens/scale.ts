import Screen from '#screens/scale.png'
import { scaleActivities } from '../activities/scale/_scaleActivities'
import type { M8Screen } from '../screen'

export const scaleScreen = {
  id: 'scale',
  name: 'Scale',
  img: Screen,
  categories: ['sequencer', 'instrument'],
  description: 'Sets the root scale, which changes how the sequencer applies notes to a TSP enabled instrument',
  activities: scaleActivities,
} as const satisfies M8Screen
