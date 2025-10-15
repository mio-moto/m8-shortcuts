import Screen from '#screens/system-settings.png'
import type { M8Screen } from '../screen'

export const systemSettingsScreen = {
  id: 'system-settings',
  name: 'System Settings',
  img: Screen,
  categories: ['system'],
  description: 'Various configurations of the M8',
  activities: [],
} as const satisfies M8Screen
