import Screen from '#screens/load-project.png'
import { loadProjectActivities } from '../activities/load-project/_loadProjectActivities'
import type { M8Screen } from '../screen'

export const loadProjectScreen = {
  id: 'load-project',
  name: 'Load Project',
  img: Screen,
  categories: ['system'],
  description: 'Loads a project',
  activities: loadProjectActivities,
} as const satisfies M8Screen
