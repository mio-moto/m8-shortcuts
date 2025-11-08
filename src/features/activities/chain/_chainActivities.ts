import { clone } from './clone'
import { clearMutes, continuePlay, copy, cut, editLarge, editSmall, enterSelection, mute, navigate, paste, play, soloTrack } from './common'

import { insertNew } from './insertNew'
import { insertUnused } from './insertUnused'
import { loopSelection } from './loopSelection'
import { loopSelectionTracks } from './loopSelectionTracks'
import { navigateChain } from './navigateChain'
import { navigateTrack } from './navigateTrack'

export const chainActivities = [
  navigate,
  navigateChain,
  navigateTrack,

  play,
  continuePlay,
  loopSelection,
  loopSelectionTracks,
  mute,
  soloTrack,
  clearMutes,

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
