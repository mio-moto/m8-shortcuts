import Video from '#assets/activity/table/quick-next-table.webm'
import type { Activity } from '../../activity'

export const quickNextTable = {
  id: 'quick-next-table',
  title: 'Next / prev 16 Tables',
  description: 'Moves 16 tables at a time.',
  media: { video: Video },
  keypress: [['shift', 'up'], 'or', ['shift', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
