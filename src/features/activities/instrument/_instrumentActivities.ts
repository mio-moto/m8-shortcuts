import { assignEq } from './assignEq'
import { assignMidi } from './assignMidi'
import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continue'
import { copy } from './copy'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { editTouch } from './editTouch'
import { fmChangeAlgo } from './fmChangeAlgo'
import { fmChangeOperator } from './fmChangeOperator'
import { fmCopyOperator } from './fmCopyOperator'
import { fmPasteOperator } from './fmPasteOperator'
import { hyperAddNote } from './hyperAddNote'
import { hyperChangeChord } from './hyperChangeChord'
import { hyperCopyChord } from './hyperCopyChord'
import { hyperPasteChord } from './hyperPasteChord'
import { hyperRemoveNote } from './hyperRemoveNote'
import { muteTrack } from './muteTrack'
import { nameInstrument } from './nameInstrument'
import { navigate } from './navigate'
import { nextInstrument } from './nextInstrument'
import { nextInstrumentQuick } from './nextInstrumentQuick'
import { paste } from './paste'
import { play } from './play'
import { preview } from './preview'
import { randomize } from './randomize'
import { setDefault } from './setDefault'
import { soloTrack } from './soloTrack'
import { undoPaste } from './undoPaste'

export const instrumentActivities = [
  navigate,
  nextInstrument,
  nextInstrumentQuick,

  play,
  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,
  preview,

  editLarge,
  editSmall,
  editTouch,
  setDefault,
  copy,
  paste,
  undoPaste,
  randomize,

  fmChangeAlgo,
  fmChangeOperator,
  fmCopyOperator,
  fmPasteOperator,

  hyperAddNote,
  hyperChangeChord,
  hyperCopyChord,
  hyperPasteChord,
  hyperRemoveNote,

  assignMidi,
  nameInstrument,
  assignEq,
]
