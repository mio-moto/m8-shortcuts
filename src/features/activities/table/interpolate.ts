import Video from '#assets/activity/table/interpolate.webm'
import type { Activity } from '../../activity'

export const interpolate = {
  id: 'interpolate',
  title: 'Interpolate Values',
  description:
    'With a column of values selected, interpolate the values from the first to last selection. This works for FX, but only when row has the same FX command inserted.',
  media: { video: Video },
  keypress: [['shift', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
