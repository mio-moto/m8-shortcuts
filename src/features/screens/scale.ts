import Screen from '#screens/scale.png'
import type { M8Screen } from '../screen'

export const scaleScreen = {
  id: 'scale',
  name: 'Scale',
  img: Screen,
  categories: ['sequencer', 'instrument'],
  description: 'Sets the root scale, which changes how the sequencer applies notes to a TSP enabled instrument',
  activities: [],
} as const satisfies M8Screen
