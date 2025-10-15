import Screen from '#screens/midi-mappings.png'
import type { M8Screen } from '../screen'

export const midiMappingsScreen = {
  id: 'midi-mappings',
  name: 'MIDI Mappings',
  img: Screen,
  categories: ['system'],
  description: 'Configures mappings of incoming (through USB, TRS or internal MIDI) messages',
  activities: [],
} as const satisfies M8Screen
