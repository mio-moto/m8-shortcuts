import { clearAllMuteSolo } from './clearAllMuteSolo'
import { clone } from './clone'
import { continuePlay } from './continuePlay'
import { copy } from './copy'
import { cut } from './cut'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { enterSelection } from './enterSelection'
import { insertNew } from './insertNew'
import { insertUnused } from './insertUnused'
import { muteTrack } from './muteTrack'
import { navigate } from './navigate'
import { navigateChain } from './navigateChain'
import { navigateTrack } from './navigateTrack'
import { paste } from './paste'
import { play } from './play'
import { soloTrack } from './soloTrack'

export const chainActivities = [
  navigate,
  navigateChain,
  navigateTrack,
  play,
  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,
  insertNew,
  editSmall,
  editLarge,
  insertUnused,
  cut,
  enterSelection,
  copy,
  paste,
  clone,
]
