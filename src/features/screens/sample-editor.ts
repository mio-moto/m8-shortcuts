import Screen from '#screens/sample-editor.png'
import { sampleEditorActivities } from '../activities/sample-editor/_sampleEditorActivities'
import type { M8Screen } from '../screen'

export const instrumentScreen = {
  id: 'sample-editor',
  name: 'Sample Editor',
  img: Screen,
  categories: ['instrument'],
  description: 'Changes, cuts or slices a sample to save it on the SD card.',
  activities: sampleEditorActivities,
} as const satisfies M8Screen
