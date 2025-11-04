import Data from '#assets/activity/song/live-mode.json'
import Video from '#assets/activity/song/live-mode.mp4'
import type { Activity } from '../../activity'

export const liveMode = {
  id: 'live-mode',
  title: 'Live Mode',
  description:
    'Enters and exists into live mode. Live mode allows playing, cueing or stopping each track independently and from anywhere in the song structure. When a track is cued for playback via pressing [PLAY] the sequencer will wait for the currently playing chain to finish before activating the newly cued chain by default. You can change this behavior on the Project View under "Live Quantize".',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'left']],
  categories: ['play'],
} as const satisfies Activity
