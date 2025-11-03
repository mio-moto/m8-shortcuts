import Screen from '#screens/load-project.png'
import { loadProjectActivities as fileBrowserActivities } from '../activities/fileBrowser/_loadProjectActivities'
import type { M8Screen } from '../screen'

export const fileBrowser = {
  id: 'file-browser',
  name: 'File Browser',
  img: Screen,
  categories: ['system'],
  description: 'Loads a projects, samples and instrument',
  activities: fileBrowserActivities,
} as const satisfies M8Screen
