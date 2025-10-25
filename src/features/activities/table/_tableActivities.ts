import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continuePlay'
import { copy } from './copy'
import { createNewInstrument } from './createNewInstrument'
import { createNewTable } from './createNewTable'
import { cut } from './cut'
import { editLarge } from './editLarge'
import { editOctave } from './editOctave'
import { editSmall } from './editSmall'
import { enterSelection } from './enterSelection'
import { insertNew } from './insertNew'
import { interpolate } from './interpolate'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { nextTable } from './nextTable'
import { paste } from './paste'
import { play } from './play'
import { quickNextTable } from './quickNextTable'
import { shiftSelection } from './shiftSelection'
import { soloTrack } from './soloTrack'

export const tableActivities = [
  navigate,
  quickNextTable,
  nextTable,

  play,
  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  insertNew,
  editLarge,
  editOctave,
  editSmall,
  createNewInstrument,
  createNewTable,

  enterSelection,
  copy,
  cut,
  paste,
  shiftSelection,

  interpolate,
]
