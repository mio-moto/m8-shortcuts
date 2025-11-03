import Data from '#assets/activity/project/store-snapshot.json'
import Video from '#assets/activity/project/store-snapshot.mp4'

import type { Activity } from '../../activity'

export const snapshotCreate = {
  id: 'snapshot-create',
  title: 'Create Snapshot',
  description: 'Creates a song snapshot for temporarily storing the entire song to recall at a later point.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt']],
  categories: ['play'],
} as const satisfies Activity
