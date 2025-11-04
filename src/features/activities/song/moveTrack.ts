import Data from '#assets/activity/song/move-track.json'
import Video from '#assets/activity/song/move-track.mp4'
import type { Activity } from '../../activity'

export const moveTrack = {
  id: 'move-track',
  title: 'Move Track',
  description:
    'If the cursor is on Row 00, enters into track reordering mode, which allows to swap all chains of one track with another track. Can be exited with [DOWN]',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['2x', 'up', 'after', ['edit', 'left', 'right']],
  categories: ['edit'],
} as const satisfies Activity
