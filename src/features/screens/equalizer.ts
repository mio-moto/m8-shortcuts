import Screen from '#screens/eq-bank.png'
import { eqActivities } from '../activities/eq/_eqActivities'
import type { M8Screen } from '../screen'

export const equalizerBankScreen = {
  id: 'equalizer-bank',
  name: 'Equalizer',
  img: Screen,
  categories: ['instrument', 'mixer'],
  description: 'Setting equalizer per FX, per instrument or for the entire mix',
  activities: eqActivities,
} as const satisfies M8Screen
