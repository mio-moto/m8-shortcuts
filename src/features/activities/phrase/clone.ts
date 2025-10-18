import Video from '#assets/activity/phrase/clone.webm'
import type { Activity } from '../../activity'

export const clone = {
  id: 'clone',
  title: 'Clone selection',
  description:
    'When the cursor is on an instrument value or a table command (TBL, TBX, GRV, GGR) value, clones the instrument or table into an unassigned instrument or table.',
  media: { video: Video },
  keypress: [['shift', 'opt'], 'after', ['shift', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
