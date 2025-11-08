import AssignMidiData from '#assets/activity/eq/assign-midi.json'
import AssignMidiVideo from '#assets/activity/eq/assign-midi.mp4'
import AssignTouchData from '#assets/activity/eq/assign-touch.json'
import AssignTouchVideo from '#assets/activity/eq/assign-touch.mp4'
import ClearMutesData from '#assets/activity/eq/clear-mutes.json'
import ClearMutesVideo from '#assets/activity/eq/clear-mutes.mp4'
import ContinuePlayData from '#assets/activity/eq/continue-track.json'
import ContinuePlayVideo from '#assets/activity/eq/continue-track.mp4'
import CopyData from '#assets/activity/eq/copy.json'
import CopyVideo from '#assets/activity/eq/copy.mp4'
import EditLargeData from '#assets/activity/eq/edit-large.json'
import EditLargeVideo from '#assets/activity/eq/edit-large.mp4'
import EditSmallData from '#assets/activity/eq/edit-small.json'
import EditSmallVideo from '#assets/activity/eq/edit-small.mp4'
import MuteData from '#assets/activity/eq/mute-track.json'
import MuteVideo from '#assets/activity/eq/mute-track.mp4'
import NavigateData from '#assets/activity/eq/navigate.json'
import NavigateVideo from '#assets/activity/eq/navigate.mp4'
import PasteData from '#assets/activity/eq/paste.json'
import PasteVideo from '#assets/activity/eq/paste.mp4'
import SetDefaultData from '#assets/activity/eq/set-default.json'
import SetDefaultVideo from '#assets/activity/eq/set-default.mp4'
import SoloData from '#assets/activity/eq/solo-track.json'
import SoloVideo from '#assets/activity/eq/solo-track.mp4'
import { makeAssignMidi } from '../_common/assignMidi'
import { makeAssignTouch } from '../_common/assignTouch'
import { makeClearMutes } from '../_common/clearMutes'
import { makeContinuePlay } from '../_common/continue'
import { makeCopy } from '../_common/copy'
import { makeEditLarge } from '../_common/editLarge'
import { makeEditSmall } from '../_common/editSmall'
import { makeMuteTrack } from '../_common/muteTrack'
import { makeNavigate } from '../_common/navigate'
import { makePaste } from '../_common/paste'
import { makeSetDefault } from '../_common/setDefault'
import { makeSoloTrack } from '../_common/soloTrack'

export const assignMidi = makeAssignMidi({ video: AssignMidiVideo, events: AssignMidiData as [number, number][] })
export const assignTouch = makeAssignTouch({ video: AssignTouchVideo, events: AssignTouchData as [number, number][] })
export const clearMutes = makeClearMutes({ video: ClearMutesVideo, events: ClearMutesData as [number, number][] })
export const continuePlay = makeContinuePlay({ video: ContinuePlayVideo, events: ContinuePlayData as [number, number][] })
export const copy = makeCopy({ video: CopyVideo, events: CopyData as [number, number][] })
export const editLarge = makeEditLarge({ video: EditLargeVideo, events: EditLargeData as [number, number][] })
export const editSmall = makeEditSmall({ video: EditSmallVideo, events: EditSmallData as [number, number][] })
export const mute = makeMuteTrack({ video: MuteVideo, events: MuteData as [number, number][] })
export const navigate = makeNavigate({ video: NavigateVideo, events: NavigateData as [number, number][] })
export const paste = makePaste({ video: PasteVideo, events: PasteData as [number, number][] })
export const setDefault = makeSetDefault({ video: SetDefaultVideo, events: SetDefaultData as [number, number][] })
export const soloTrack = makeSoloTrack({ video: SoloVideo, events: SoloData as [number, number][] })
