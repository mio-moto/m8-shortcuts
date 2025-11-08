import ClearMutesData from '#assets/activity/chain/clear-mutes.json'
import ClearMutesVideo from '#assets/activity/chain/clear-mutes.mp4'
import ContinuePlayData from '#assets/activity/chain/continue-track.json'
import ContinuePlayVideo from '#assets/activity/chain/continue-track.mp4'
import CopyData from '#assets/activity/chain/copy.json'
import CopyVideo from '#assets/activity/chain/copy.mp4'
import CutData from '#assets/activity/chain/cut.json'
import CutVideo from '#assets/activity/chain/cut.mp4'
import EditLargeData from '#assets/activity/chain/edit-large.json'
import EditLargeVideo from '#assets/activity/chain/edit-large.mp4'
import EditSmallData from '#assets/activity/chain/edit-small.json'
import EditSmallVideo from '#assets/activity/chain/edit-small.mp4'
import EnterSelectionData from '#assets/activity/chain/enter-selection.json'
import EnterSelectionVideo from '#assets/activity/chain/enter-selection.mp4'
import MuteData from '#assets/activity/chain/mute-track.json'
import MuteVideo from '#assets/activity/chain/mute-track.mp4'
import NavigateData from '#assets/activity/chain/navigate.json'
import NavigateVideo from '#assets/activity/chain/navigate.mp4'
import PasteData from '#assets/activity/chain/paste.json'
import PasteVideo from '#assets/activity/chain/paste.mp4'
import PlayData from '#assets/activity/chain/play.json'
import PlayVideo from '#assets/activity/chain/play.mp4'
import SoloData from '#assets/activity/chain/solo-track.json'
import SoloVideo from '#assets/activity/chain/solo-track.mp4'
import { makeClearMutes } from '../_common/clearMutes'
import { makeContinuePlay } from '../_common/continue'
import { makeCopy } from '../_common/copy'
import { makeCut } from '../_common/cut'
import { makeEditLarge } from '../_common/editLarge'
import { makeEditSmall } from '../_common/editSmall'
import { makeEnterSelection } from '../_common/enterSelection'
import { makeMuteTrack } from '../_common/muteTrack'
import { makeNavigate } from '../_common/navigate'
import { makePaste } from '../_common/paste'
import { makePlay } from '../_common/play'
import { makeSoloTrack } from '../_common/soloTrack'

export const clearMutes = makeClearMutes({ video: ClearMutesVideo, events: ClearMutesData as [number, number][] })
export const continuePlay = makeContinuePlay({ video: ContinuePlayVideo, events: ContinuePlayData as [number, number][] })
export const copy = makeCopy({ video: CopyVideo, events: CopyData as [number, number][] })
export const cut = makeCut({ video: CutVideo, events: CutData as [number, number][] })
export const editLarge = makeEditLarge({ video: EditLargeVideo, events: EditLargeData as [number, number][] })
export const editSmall = makeEditSmall({ video: EditSmallVideo, events: EditSmallData as [number, number][] })
export const enterSelection = makeEnterSelection({ video: EnterSelectionVideo, events: EnterSelectionData as [number, number][] })
export const mute = makeMuteTrack({ video: MuteVideo, events: MuteData as [number, number][] })
export const navigate = makeNavigate({ video: NavigateVideo, events: NavigateData as [number, number][] })
export const paste = makePaste({ video: PasteVideo, events: PasteData as [number, number][] })
export const play = makePlay({ video: PlayVideo, events: PlayData as [number, number][] })
export const soloTrack = makeSoloTrack({ video: SoloVideo, events: SoloData as [number, number][] })
