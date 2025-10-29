import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continuePlay'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { setDefault } from './setDefault'
import { soloTrack } from './soloTrack'

export const fxActivities = [
  navigate,

  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  editSmall,
  editLarge,
  setDefault,
]
