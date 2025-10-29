import { deleteSlice } from './deleteSlice'
import { lazyChop } from './lazyChop'
import { moveLarge } from './moveLarge'
import { moveLargeSteps } from './moveLargeSteps'
import { moveSmall } from './moveSmall'
import { moveSmallSteps } from './moveSmallSteps'
import { moveTouch } from './moveTouch'
import { preview } from './preview'
import { record } from './record'

export const sampleEditorActivities = [
  moveSmall,
  moveLarge,
  moveSmallSteps,
  moveLargeSteps,
  moveTouch,

  preview,
  lazyChop,
  record,

  deleteSlice,
]
