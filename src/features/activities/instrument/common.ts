import AssignMidiData from '#assets/activity/instrument/assign-midi.json'
import AssignMidiVideo from '#assets/activity/instrument/assign-midi.mp4'
import AssignTouchData from '#assets/activity/instrument/assign-touch.json'
import AssignTouchVideo from '#assets/activity/instrument/assign-touch.mp4'
import ClearMutesData from '#assets/activity/instrument/clear-mutes.json'
import ClearMutesVideo from '#assets/activity/instrument/clear-mutes.mp4'
import ContinuePlayData from '#assets/activity/instrument/continue-track.json'
import ContinuePlayVideo from '#assets/activity/instrument/continue-track.mp4'
import CopyData from '#assets/activity/instrument/copy.json'
import CopyVideo from '#assets/activity/instrument/copy.mp4'
import EditLargeData from '#assets/activity/instrument/edit-large.json'
import EditLargeVideo from '#assets/activity/instrument/edit-large.mp4'
import EditSmallData from '#assets/activity/instrument/edit-small.json'
import EditSmallVideo from '#assets/activity/instrument/edit-small.mp4'
import MuteData from '#assets/activity/instrument/mute-track.json'
import MuteVideo from '#assets/activity/instrument/mute-track.mp4'
import NavigateData from '#assets/activity/instrument/navigate.json'
import NavigateVideo from '#assets/activity/instrument/navigate.mp4'
import PasteData from '#assets/activity/instrument/paste.json'
import PasteVideo from '#assets/activity/instrument/paste.mp4'
import PlayData from '#assets/activity/instrument/play.json'
import PlayVideo from '#assets/activity/instrument/play.mp4'
import SetDefaultData from '#assets/activity/instrument/set-default.json'
import SetDefaultVideo from '#assets/activity/instrument/set-default.mp4'
import SoloData from '#assets/activity/instrument/solo-track.json'
import SoloVideo from '#assets/activity/instrument/solo-track.mp4'
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
import { makePlay } from '../_common/play'
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
export const play = makePlay({ video: PlayVideo, events: PlayData as [number, number][] })
export const setDefault = makeSetDefault({ video: SetDefaultVideo, events: SetDefaultData as [number, number][] })
export const soloTrack = makeSoloTrack({ video: SoloVideo, events: SoloData as [number, number][] })
