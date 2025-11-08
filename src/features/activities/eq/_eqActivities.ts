import { assignMidi, assignTouch, clearMutes, continuePlay, copy, editLarge, editSmall, mute, paste, soloTrack } from './common'
import { exit } from './exit'
import { muteEq } from './muteEq'
import { setDefault } from './setDefault'

export const eqActivities = [
  exit,

  muteEq,
  continuePlay,
  mute,
  soloTrack,
  clearMutes,

  editSmall,
  editLarge,
  setDefault,
  copy,
  paste,

  assignTouch,
  assignMidi,
]
