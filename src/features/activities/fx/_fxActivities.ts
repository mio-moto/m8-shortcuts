import { assignMidi, assignTouch, clearMutes, continuePlay, editLarge, editSmall, mute, navigate, setDefault, soloTrack } from './common'

export const fxActivities = [
  navigate,

  continuePlay,
  mute,
  soloTrack,
  clearMutes,

  editSmall,
  editLarge,
  setDefault,

  assignMidi,
  assignTouch,
]
