import { clearAllMuteSolo } from '../global/clearAllMuteSolo'
import { muteTrack } from '../global/muteTrack'
import { soloTrack } from '../global/soloTrack'
import { assignEq } from './assignEq'
import { assignMidi } from './assignMidi'
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
import { hyperRemoveNote } from './hyperRemoveNote'
import { nameInstrument } from './nameInstrument'
import { navigate } from './navigate'
import { nextInstrument } from './nextInstrument'
import { nextInstrumentQuick } from './nextInstrumentQuick'
import { paste } from './paste'
import { play } from './play'
import { preview } from './preview'
import { setDefault } from './setDefault'
import { undoPaste } from './undoPaste'

export const instrumentActivities = [
  navigate,
  nextInstrument,
  nextInstrumentQuick,

  play,
  preview,
  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  editLarge,
  editSmall,
  setDefault,
  copy,
  paste,
  undoPaste,
  editTouch,

  fmChangeAlgo,
  fmChangeOperator,
  fmCopyOperator,
  fmPasteOperator,

  hyperAddNote,
  hyperChangeChord,
  hyperRemoveNote,

  assignMidi,
  nameInstrument,
  assignEq,
]
