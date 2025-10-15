import Screen from '#screens/project.png'
import type { M8Screen } from '../screen'

export const projectScreen = {
  id: 'project',
  name: 'Project',
  img: Screen,
  categories: ['system', 'sequencer', 'instrument'],
  description: 'Project setup for a song',
  activities: [],
} as const satisfies M8Screen
