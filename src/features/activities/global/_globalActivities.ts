import { clearAllMuteSolo } from './clearAllMuteSolo'
import { moveCursorActivity } from './moveCursor'
import { muteTrack } from './muteTrack'
import { navigateScreenActivity } from './navigateScreen'
import { soloTrack } from './soloTrack'

export const globalActivities = [moveCursorActivity, navigateScreenActivity, muteTrack, soloTrack, clearAllMuteSolo]
