import { nameInstrument } from '../instrument/nameInstrument'
import { changeRootKey } from './changeRootKey'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { enableKey } from './enableKey'
import { navigate } from './navigate'
import { nextEntry } from './nextEntry'
import { nextQuickEntry } from './nextQuickEntry'

export const scaleActivities = [
  navigate,
  nextEntry,
  nextQuickEntry,

  changeRootKey,
  enableKey,
  editSmall,
  editLarge,

  nameInstrument,
]
