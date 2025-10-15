import Screen from '#screens/fx-settings.png'
import type { M8Screen } from '../screen'

export const fxSettingsScreen = {
  id: 'fx-settings',
  name: 'FX Settings',
  img: Screen,
  categories: ['mixer', 'instrument'],
  description: 'Setting equalizer per FX, per instrument or for the entire mix',
  activities: [],
} as const satisfies M8Screen
