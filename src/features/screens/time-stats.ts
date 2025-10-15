import Screen from '#screens/time-stats.png'
import type { M8Screen } from '../screen'

export const timeStatsScreen = {
  id: 'time-stats',
  name: 'Time Stats',
  img: Screen,
  categories: ['system'],
  description: 'Shows misc time statistics (time does not advance when the device is turned off)',
  activities: [],
} as const satisfies M8Screen
