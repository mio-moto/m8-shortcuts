import { assignMidi } from './assignMidi'
import { assignTouch } from './assignTouch'
import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continuePlay'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { exit } from './exit'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { setDefault } from './setDefault'
import { soloTrack } from './soloTrack'

export const scopeActivities = [
  navigate,
  exit,

  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  editSmall,
  editLarge,
  setDefault,

  assignMidi,
  assignTouch,
]
