import Screen from '#screens/theme-settings.png'
import type { M8Screen } from '../screen'

export const themeScreen = {
  id: 'theme',
  name: 'Theme',
  img: Screen,
  categories: ['system'],
  description: 'Sets the color theme of the M8',
  activities: [],
} as const satisfies M8Screen
