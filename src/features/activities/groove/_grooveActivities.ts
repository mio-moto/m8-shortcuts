import { clearMutes, continuePlay, copy, cut, editSmall, enterSelection, mute, navigate, paste, play, soloTrack } from './common'
import { editMultiple } from './editMultiple'
import { editMultipleQuick } from './editMultipleQuick'
import { editRelated } from './editRelated'
import { insertNew } from './insertNew'
import { interpolate } from './interpolate'
import { nextEntry } from './nextEntry'
import { nextQuickEntry } from './nextQuickEntry'

export const grooveActivities = [
  navigate,
  nextQuickEntry,
  nextEntry,

  play,
  continuePlay,
  mute,
  soloTrack,
  clearMutes,

  insertNew,
  editSmall,
  editRelated,
  editMultiple,
  editMultipleQuick,

  enterSelection,
  copy,
  cut,
  paste,

  interpolate,
]
