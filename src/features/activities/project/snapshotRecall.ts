import Video from '#assets/activity/project/snapshot-recall.webm'
import type { Activity } from '../../activity'

export const snapshotRecall = {
  id: 'snapshot-recall',
  title: 'Recall Snapshot',
  description: 'Recall the song snapshot previously created.',
  media: { video: Video },
  keypress: [['shift', 'edit']],
  categories: ['play'],
} as const satisfies Activity
