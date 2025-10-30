import { assignMidi } from './assignMidi'
import { assignTouch } from './assignTouch'
import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continuePlay'
import { copy } from './copy'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { exit } from './exit'
import { muteEq } from './muteEq'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { paste } from './paste'
import { setDefault } from './setDefault'
import { soloTrack } from './soloTrack'

export const eqActivities = [
  navigate,
  exit,

  muteEq,
  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  editSmall,
  editLarge,
  setDefault,
  copy,
  paste,
  
  assignTouch,
  assignMidi,
]
