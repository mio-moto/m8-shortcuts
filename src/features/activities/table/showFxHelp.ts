import Data from '#assets/activity/table/show-fx-help.json'
import Video from '#assets/activity/table/show-fx-help.mp4'
import type { Activity } from '../../activity'

export const showFxHelp = {
  id: 'show-fx-help',
  title: 'Show FX Help',
  description: 'With the cursor on an FX row, shows the effect help and sections.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
