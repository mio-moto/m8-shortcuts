import Data from '#assets/activity/phrase/next-phrase.json'
import Video from '#assets/activity/phrase/next-phrase.mp4'
import type { Activity } from '../../activity'

export const navigatePhrase = {
  id: 'navigate-phrase',
  title: 'Next / prev phrase',
  description: 'Navigates to previous or next phrase in the song. The triangle on the side indicates which phrase of a chain it is.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'up'], 'or', ['shift', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
