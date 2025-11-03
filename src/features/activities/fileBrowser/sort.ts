import Data from '#assets/activity/fileBrowser/sort.json'
import Video from '#assets/activity/fileBrowser/sort.mp4'

import type { Activity } from '../../activity'

export const sort = {
  id: 'sort',
  title: 'Sort directory',
  description: 'Sorts the directory in lexographic order (by incrementing number and alphabet)',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt']],
  categories: ['misc'],
} as const satisfies Activity
