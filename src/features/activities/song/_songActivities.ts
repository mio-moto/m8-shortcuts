import { bookmark } from './bookmark'
import { clearAllMuteSolo } from './clearAllMuteSolo'
import { clone } from './clone'
import { copy } from './copy'
import { cueRow } from './cueRow'
import { cut } from './cut'
import { deepClone } from './deepClone'
import { editLarge } from './editLarge'
import { editMultiple } from './editMultiple'
import { editSmall } from './editSmall'
import { enterSelection } from './enterSelection'
import { insertNew } from './insertNew'
import { liveMode } from './liveMode'
import { moveFast } from './moveFast'
import { moveSelection } from './moveSelection'
import { moveSlow } from './moveSlow'
import { moveTrack } from './moveTrack'
import { muteTrack } from './muteTrack'
import { paste } from './paste'
import { play } from './play'
import { renderSelection } from './renderSelection'
import { soloTrack } from './soloTrack'
import { soloTracks } from './soloTracks'
import { trackTime } from './trackTime'

export const songActivities = [
  moveSlow,
  moveFast,
  insertNew,
  editLarge,
  editSmall,
  editMultiple,
  enterSelection,
  moveSelection,
  copy,
  paste,
  cut,
  clone,
  deepClone,
  moveTrack,
  play,
  cueRow,
  soloTracks,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,
  liveMode,
  bookmark,
  renderSelection,
  trackTime,
]
