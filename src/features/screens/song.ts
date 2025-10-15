import Song from '#screens/song.png'
import { songActivities } from '../activities/song/_songActivities'
import type { M8Screen } from '../screen'

export const songScreen = {
  id: 'song',
  name: 'Song',
  img: Song,
  categories: ['sequencer'],
  description: 'Song screen',
  activities: songActivities,
} as const satisfies M8Screen
