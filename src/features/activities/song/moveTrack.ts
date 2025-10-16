import Video from '#assets/activity/song/move-track.webm'
import type { Activity } from '../../activity'

export const moveTrack = {
  id: 'move-track',
  title: 'Move Track',
  description:
    'If the cursor is on Row 00, enters into track reordering mode, which allows to swap all chains of one track with another track. Can be exited with [DOWN]',
  media: { video: Video },
  keypress: ['2x', 'up', 'after', ['edit', 'left', 'right']],
  categories: ['edit'],
} as const satisfies Activity
