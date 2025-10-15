import Phrase from '#screens/phrase.png'
import type { M8Screen } from '../screen'

export const phraseScreen = {
  id: 'phrase',
  name: 'Phrase',
  img: Phrase,
  categories: ['sequencer'],
  description: 'Phrase screen',
  activities: [],
} as const satisfies M8Screen
