import Data from '#assets/activity/phrase/clear-mutes.json'
import Video from '#assets/activity/phrase/clear-mutes.mp4'
import type { Activity } from '../../activity'

export const clearAllMuteSolo = {
  id: 'clear-all-mute-solo',
  title: 'Clear mutes and solos',
  description: 'Clears all mute and solos that are being held by any track.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
