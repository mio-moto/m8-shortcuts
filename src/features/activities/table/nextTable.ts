import Data from '#assets/activity/table/next-table.json'
import Video from '#assets/activity/table/next-table.mp4'
import type { Activity } from '../../activity'

export const nextTable = {
  id: 'next-table',
  title: 'Next / prev table',
  description: 'Navigates to previous or next table',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'left'], 'or', ['shift', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
