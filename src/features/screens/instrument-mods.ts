import Screen from '#screens/mod-section.png'
import type { M8Screen } from '../screen'

export const instrumentModsScreen = {
  id: 'instrument-mods',
  name: 'Modulators',
  img: Screen,
  categories: ['instrument'],
  description: 'Configures modulators for an instrument',
  activities: [],
} as const satisfies M8Screen
