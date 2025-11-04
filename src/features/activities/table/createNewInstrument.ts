import Data from '#assets/activity/table/new-instrument.json'
import Video from '#assets/activity/table/new-instrument.mp4'
import type { Activity } from '../../activity'

export const createNewInstrument = {
  id: 'create-new-instrument',
  title: 'Assign new Instrument',
  description: 'When the cursor is on an instrument row, assigns a new instrument with an unused slot.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['2x', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
