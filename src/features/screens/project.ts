import Screen from '#screens/project.png'
import { projectActivities } from '../activities/project/_projectActivities'
import type { M8Screen } from '../screen'

export const projectScreen = {
  id: 'project',
  name: 'Project',
  img: Screen,
  categories: ['system', 'sequencer', 'instrument'],
  description: 'Project setup for a song',
  activities: projectActivities,
} as const satisfies M8Screen
