import Phrase from '#screens/phrase.png'
import { phraseActivities } from '../activities/phrase/_phraseActivities'
import type { M8Screen } from '../screen'

export const phraseScreen = {
  id: 'phrase',
  name: 'Phrase',
  img: Phrase,
  categories: ['sequencer'],
  description: 'Phrase screen',
  activities: phraseActivities,
} as const satisfies M8Screen
