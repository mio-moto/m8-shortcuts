import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continuePlay'
import { copy } from './copy'
import { cut } from './cut'
import { edit } from './edit'
import { editMultiple } from './editMultiple'
import { editMultipleQuick } from './editMultipleQuick'
import { editRelated } from './editRelated'
import { enterSelection } from './enterSelection'
import { insertNew } from './insertNew'
import { interpolate } from './interpolate'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { nextEntry } from './nextEntry'
import { nextQuickEntry } from './nextQuickEntry'
import { paste } from './paste'
import { play } from './play'
import { soloTrack } from './soloTrack'

export const grooveActivities = [
  navigate,
  nextQuickEntry,
  nextEntry,

  play,
  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  insertNew,
  edit,
  editRelated,
  editMultiple,
  editMultipleQuick,

  enterSelection,
  copy,
  cut,
  paste,

  interpolate,
]
