import { clearAllMuteSolo } from './clearAllMuteSolo'
import { copy } from './copy'
import { cueRow } from './cueRow'
import { cut } from './cut'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { insertNew } from './insertNew'
import { liveMode } from './liveMode'
import { moveFast } from './moveFast'
import { moveSlow } from './moveSlow'
import { muteTrack } from './muteTrack'
import { paste } from './paste'
import { play } from './play'
import { soloTrack } from './soloTrack'
import { soloTracks } from './soloTracks'
import { trackTime } from './trackTime'

export const songActivities = [
  moveSlow,
  moveFast,
  insertNew,
  editLarge,
  editSmall,
  copy,
  paste,
  cut,
  play,
  cueRow,
  soloTracks,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,
  liveMode,
  trackTime,
]
