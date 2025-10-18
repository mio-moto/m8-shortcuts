import Video from '#assets/activity/phrase/show-fx-help.webm'
import type { Activity } from '../../activity'

export const showFxHelp = {
  id: 'show-fx-help',
  title: 'Show FX Help',
  description: 'With the cursor on an FX row, shows the effect help and sections.',
  media: { video: Video },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
