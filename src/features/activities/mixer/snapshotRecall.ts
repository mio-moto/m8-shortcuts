import Data from '#assets/activity/mixer/snapshot-recall.json'
import Video from '#assets/activity/mixer/snapshot-recall.mp4'
import type { Activity } from '../../activity'

export const snapshotRecall = {
  id: 'snapshot-recall',
  title: 'Recall Snapshot',
  description: 'Recall the song snapshot previously created.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'edit']],
  categories: ['play'],
} as const satisfies Activity
