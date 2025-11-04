import Data from '#assets/activity/table/next-table-quick.json'
import Video from '#assets/activity/table/next-table-quick.mp4'
import type { Activity } from '../../activity'

export const quickNextTable = {
  id: 'quick-next-table',
  title: 'Next / prev 16 Tables',
  description: 'Moves 16 tables at a time.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'up'], 'or', ['shift', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
