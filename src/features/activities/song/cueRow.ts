import Video from '#assets/activity/song/cue-row.webm'
import type { Activity } from '../../activity'

export const cueRow = {
  id: 'cue-row',
  title: 'Cue Row',
  description: 'Cue the selected song row for playback, regardless of Live Mode.',
  media: { video: Video },
  keypress: [['play', 'left']],
  categories: ['play'],
} as const satisfies Activity
