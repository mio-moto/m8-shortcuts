import { assignMidi } from '../instrument/assignMidi'
import { assignTouch } from './assignTouch'
import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continuePlay'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { enterLimiterScope } from './enterLimiterScope'
import { enterMixScope } from './enterMixScope'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { setDefault } from './setDefault'
import { snapshotCreate } from './snapshotCreate'
import { snapshotRecall } from './snapshotRecall'
import { soloTrack } from './soloTrack'

export const mixerActivities = [
  navigate,
  enterMixScope,
  enterLimiterScope,

  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  editSmall,
  editLarge,
  setDefault,
  snapshotCreate,
  snapshotRecall,

  assignTouch,
  assignMidi,
]
