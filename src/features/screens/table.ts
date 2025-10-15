import Screen from '#screens/table.png'
import type { M8Screen } from '../screen'

export const tableScreen = {
  id: 'table',
  name: 'Table',
  img: Screen,
  categories: ['instrument', 'sequencer'],
  description: 'Instrument or AUX tables add instrument controls per instrument or track',
  activities: [],
} as const satisfies M8Screen
