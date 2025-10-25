import Song from '#screens/song.png'
import { globalActivities } from '../activities/global/_globalActivities'
import type { M8Screen } from '../screen'

export const globalShortcuts = {
  id: 'global',
  name: 'Global Shortcuts',
  img: Song,
  categories: ['misc'],
  description: 'Global Shortcuts are available on most screens.',
  activities: globalActivities,
} as const satisfies M8Screen
