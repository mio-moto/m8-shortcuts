import Song from '#screens/song.png'
import { moveCursorActivity } from '../activities/global/moveCursor'
import { navigateScreenActivity } from '../activities/global/navigateScreen'
import type { M8Screen } from '../screen'

export const globalShortcuts = {
  id: 'global',
  name: 'Global Shortcuts',
  img: Song,
  categories: ['misc'],
  description: 'Global Shortcuts are available on most screens.',
  activities: [moveCursorActivity, navigateScreenActivity],
} as const satisfies M8Screen
