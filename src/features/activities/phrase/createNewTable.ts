import Data from '#assets/activity/phrase/new-table.json'
import Video from '#assets/activity/phrase/new-table.mp4'
import type { Activity } from '../../activity'

export const createNewTable = {
  id: 'create-new-table',
  title: 'Assign new Table',
  description: 'When the cursor is on an FX Value of TBL, TBX, GRV or GGR, assigns an unassigned table number.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['2x', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
