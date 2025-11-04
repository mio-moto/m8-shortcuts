import Data from '#assets/activity/song/bookmark.json'
import Video from '#assets/activity/song/bookmark.mp4'
import type { Activity } from '../../activity'

export const bookmark = {
  id: 'bookmark',
  title: 'Bookmark',
  description: 'Bookmarks the chain at the cursor. If the chain is already bookmarked, removes the bookmark.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['3x', 'opt'],
  categories: ['edit'],
} as const satisfies Activity
