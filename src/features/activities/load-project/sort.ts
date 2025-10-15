import Video from '#assets/activity/load-project/sort.webm'

import type { Activity } from '../../activity'

export const sort = {
  id: 'sort',
  title: 'Sort directory',
  description: 'Sorts the directory in lexographic order (by incrementing number and alphabet)',
  media: { video: Video },
  keypress: [['shift', 'opt']],
  categories: ['misc'],
} as const satisfies Activity
