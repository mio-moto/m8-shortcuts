import type { ReactNode } from 'react'
import type { Key } from '../components/Keypress'

export interface Activity {
  id: string
  title: string
  media?: { img: string } | { video: string }
  categories: ActivityCategoryId[]
  keypress: (Key | Key[] | 'and' | 'after' | 'or' | 'hold')[]
  description: ReactNode
}

export type ActivityCategory = (typeof activityCategories)[number]
export type ActivityCategoryId = ActivityCategory['id']

export const activityCategories = [
  {
    id: 'navigation',
    title: 'Navigation',
  },
  {
    id: 'play',
    title: 'Playing',
  },
  {
    id: 'edit',
    title: 'Editing',
  },
  {
    id: 'special',
    title: 'Special Shortcuts',
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
  },
  {
    id: 'global',
    title: 'Global Shortcuts',
  },
] as const

export const activityCategoryId = activityCategories.map((x) => x.id)
