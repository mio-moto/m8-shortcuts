import Screen from '#screens/table.png'
import { tableActivities } from '../activities/table/_tableActivities'
import type { M8Screen } from '../screen'

export const tableScreen = {
  id: 'table',
  name: 'Table',
  img: Screen,
  categories: ['instrument', 'sequencer'],
  description: 'Instrument or AUX tables add instrument controls per instrument or track',
  activities: tableActivities,
} as const satisfies M8Screen
