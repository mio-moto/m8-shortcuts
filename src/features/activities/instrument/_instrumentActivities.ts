import { assignEq } from './assignEq'
import { assignMidi } from './assignMidi'
import { clearAllMuteSolo } from './clearAllMuteSolo'
import { continuePlay } from './continue'
import { copy } from './copy'
import { editLarge } from './editLarge'
import { editSmall } from './editSmall'
import { editTouch } from './editTouch'
import { muteTrack } from './muteTrack'
import { nameInstrument } from './nameInstrument'
import { navigate } from './navigate'
import { nextInstrument } from './nextInstrument'
import { nextInstrumentQuick } from './nextInstrumentQuick'
import { paste } from './paste'
import { play } from './play'
import { preview } from './preview'
import { setDefault } from './setDefault'
import { soloTrack } from './soloTrack'
import { undoPaste } from './undoPaste'

export const instrumentActivities = [
  navigate,
  nextInstrument,
  nextInstrumentQuick,

  play,
  preview,
  continuePlay,
  muteTrack,
  soloTrack,
  clearAllMuteSolo,

  editLarge,
  editSmall,
  setDefault,
  copy,
  paste,
  undoPaste,
  editTouch,

  assignMidi,
  nameInstrument,
  assignEq,
]
