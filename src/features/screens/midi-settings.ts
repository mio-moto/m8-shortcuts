import Screen from '#screens/midi-settings.png'
import type { M8Screen } from '../screen'

export const midiSettingsScreen = {
  id: 'midi-settings',
  name: 'MIDI Settings',
  img: Screen,
  categories: ['system'],
  description: 'Configures general MIDI settings',
  activities: [],
} as const satisfies M8Screen
