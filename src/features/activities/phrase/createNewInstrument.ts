import Video from '#assets/activity/phrase/create-new-instrument.webm'
import type { Activity } from '../../activity'

export const createNewInstrument = {
  id: 'create-new-instrument',
  title: 'Assign new Instrument',
  description: 'When the cursor is on an instrument row, assigns a new instrument with an unused slot.',
  media: { video: Video },
  keypress: ['2x', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
