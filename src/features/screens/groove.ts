import Screen from '#screens/groove.png'
import { grooveActivities } from '../activities/groove/_grooveActivities'
import type { M8Screen } from '../screen'

export const grooveScreen = {
  id: 'groove',
  name: 'groove',
  img: Screen,
  categories: ['sequencer'],
  description: 'Sets the tick count per step of a phrase',
  activities: grooveActivities,
} as const satisfies M8Screen
