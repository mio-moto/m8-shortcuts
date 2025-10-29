import { assignMidi } from './assignMidi'
import { assignTouch } from './assignTouch'
import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continuePlay'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { muteTrack } from './muteTrack'
import { nameProject } from './nameProject'
import { navigate } from './navigate'
import { setDefault } from './setDefault'
import { snapshotCreate } from './snapshotCreate'
import { snapshotRecall } from './snapshotRecall'
import { soloTrack } from './soloTrack'

export const projectActivities = [
  navigate,

  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  editSmall,
  editLarge,
  setDefault,
  nameProject,

  snapshotCreate,
  snapshotRecall,
  assignMidi,
  assignTouch,
]
