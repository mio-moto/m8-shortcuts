import Screen from '#screens/instrument-sampler.png'
import type { M8Screen } from '../screen'

export const instrumentScreen = {
  id: 'instrument',
  name: 'Instrument',
  img: Screen,
  categories: ['instrument'],
  description: 'Configures an instrument, here: a sampler',
  activities: [],
} as const satisfies M8Screen
