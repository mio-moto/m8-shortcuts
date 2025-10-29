import Video from '#assets/activity/project/name-project.webm'
import type { Activity } from '../../activity'

export const nameProject = {
  id: 'name-project',
  title: 'Name Project',
  description: 'Naming the Project by holding edit, navigating to the letter and releasing the edit key.',
  media: { video: Video },
  keypress: ['edit', 'after', ['up', 'down', 'left', 'right']],
  categories: ['misc'],
} as const satisfies Activity
