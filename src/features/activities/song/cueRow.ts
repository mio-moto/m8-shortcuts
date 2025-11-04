import Data from '#assets/activity/song/cue-row.json'
import Video from '#assets/activity/song/cue-row.mp4'
import type { Activity } from '../../activity'

export const cueRow = {
  id: 'cue-row',
  title: 'Cue Row',
  description: 'Cue the selected song row for playback, regardless of Live Mode.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['play', 'left']],
  categories: ['play'],
} as const satisfies Activity
