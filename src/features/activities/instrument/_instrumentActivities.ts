import { assignEq } from './assignEq'
import {
  assignMidi,
  assignTouch,
  clearMutes,
  continuePlay,
  copy,
  editLarge,
  editSmall,
  mute,
  navigate,
  paste,
  play,
  setDefault,
  soloTrack,
} from './common'
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
import { nameInstrument } from './nameInstrument'
import { nextInstrument } from './nextInstrument'
import { nextInstrumentQuick } from './nextInstrumentQuick'
import { preview } from './preview'
import { randomize } from './randomize'
import { undoPaste } from './undoPaste'

export const instrumentActivities = [
  navigate,
  nextInstrument,
  nextInstrumentQuick,

  play,
  continuePlay,
  mute,
  soloTrack,
  clearMutes,
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
  assignTouch,
  nameInstrument,
  assignEq,
]
