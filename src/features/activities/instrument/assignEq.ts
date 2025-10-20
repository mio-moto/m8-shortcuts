import Video from '#assets/activity/instrument/assign-eq.webm'
import type { Activity } from '../../activity'

export const assignEq = {
  id: 'assign-eq',
  title: 'Assign EQ',
  description: 'With the cursor on the EQ, assigns an EQ bank to the instrument - which can be edited by pressing edit again',
  media: { video: Video },
  keypress: ['edit', 'after', 'edit'],
  categories: ['misc'],
} as const satisfies Activity
