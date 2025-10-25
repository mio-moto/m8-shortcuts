import Video from '#assets/activity/table/create-new-table.webm'
import type { Activity } from '../../activity'

export const createNewTable = {
  id: 'create-new-table',
  title: 'Assign new Table',
  description: 'When the cursor is on an FX Value of TBL, TBX, GRV or GGR, assigns an unassigned table number.',
  media: { video: Video },
  keypress: ['2x', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
