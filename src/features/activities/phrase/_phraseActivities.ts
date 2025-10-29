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
import { loopSelection } from './loopSelection'
import { loopSelectionTracks } from './loopSelectionTracks'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { navigatePhrase } from './navigatePhrase'
import { navigateTrack } from './navigateTrack'
import { paste } from './paste'
import { play } from './play'
import { randomizeNotes } from './randomizeNotes'
import { randomizePattern } from './randomizePattern'
import { shiftSelection } from './shiftSelection'
import { soloTrack } from './soloTrack'

export const phraseActivities = [
  navigate,
  navigatePhrase,
  navigateTrack,

  play,
  continuePlay,
  loopSelection,
  loopSelectionTracks,
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

  randomizeNotes,
  randomizePattern,
  interpolate,
]
