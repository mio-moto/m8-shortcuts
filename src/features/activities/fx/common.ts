import AssignMidiData from '#assets/activity/fx/assign-midi.json'
import AssignMidiVideo from '#assets/activity/fx/assign-midi.mp4'
import AssignTouchData from '#assets/activity/fx/assign-touch.json'
import AssignTouchVideo from '#assets/activity/fx/assign-touch.mp4'
import ClearMutesData from '#assets/activity/fx/clear-mutes.json'
import ClearMutesVideo from '#assets/activity/fx/clear-mutes.mp4'
import ContinuePlayData from '#assets/activity/fx/continue-track.json'
import ContinuePlayVideo from '#assets/activity/fx/continue-track.mp4'
import EditLargeData from '#assets/activity/fx/edit-large.json'
import EditLargeVideo from '#assets/activity/fx/edit-large.mp4'
import EditSmallData from '#assets/activity/fx/edit-small.json'
import EditSmallVideo from '#assets/activity/fx/edit-small.mp4'
import MuteData from '#assets/activity/fx/mute-track.json'
import MuteVideo from '#assets/activity/fx/mute-track.mp4'
import NavigateData from '#assets/activity/fx/navigate.json'
import NavigateVideo from '#assets/activity/fx/navigate.mp4'
import SetDefaultData from '#assets/activity/fx/set-default.json'
import SetDefaultVideo from '#assets/activity/fx/set-default.mp4'
import SoloData from '#assets/activity/fx/solo-track.json'
import SoloVideo from '#assets/activity/fx/solo-track.mp4'
import { makeAssignMidi } from '../_common/assignMidi'
import { makeAssignTouch } from '../_common/assignTouch'
import { makeClearMutes } from '../_common/clearMutes'
import { makeContinuePlay } from '../_common/continue'
import { makeEditLarge } from '../_common/editLarge'
import { makeEditSmall } from '../_common/editSmall'
import { makeMuteTrack } from '../_common/muteTrack'
import { makeNavigate } from '../_common/navigate'
import { makeSetDefault } from '../_common/setDefault'
import { makeSoloTrack } from '../_common/soloTrack'

export const assignMidi = makeAssignMidi({ video: AssignMidiVideo, events: AssignMidiData as [number, number][] })
export const assignTouch = makeAssignTouch({ video: AssignTouchVideo, events: AssignTouchData as [number, number][] })
export const clearMutes = makeClearMutes({ video: ClearMutesVideo, events: ClearMutesData as [number, number][] })
export const continuePlay = makeContinuePlay({ video: ContinuePlayVideo, events: ContinuePlayData as [number, number][] })
export const editLarge = makeEditLarge({ video: EditLargeVideo, events: EditLargeData as [number, number][] })
export const editSmall = makeEditSmall({ video: EditSmallVideo, events: EditSmallData as [number, number][] })
export const mute = makeMuteTrack({ video: MuteVideo, events: MuteData as [number, number][] })
export const navigate = makeNavigate({ video: NavigateVideo, events: NavigateData as [number, number][] })
export const setDefault = makeSetDefault({ video: SetDefaultVideo, events: SetDefaultData as [number, number][] })
export const soloTrack = makeSoloTrack({ video: SoloVideo, events: SoloData as [number, number][] })
