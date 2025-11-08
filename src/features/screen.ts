import type { Activity } from './activity'
import { chainScreen } from './screens/chain'
import { equalizerBankScreen } from './screens/equalizer'
import { fxSettingsScreen } from './screens/fx-settings'
import { grooveScreen } from './screens/groove'
import { instrumentScreen } from './screens/instrument'
import { instrumentModsScreen } from './screens/instrument-mods'
import { fileBrowser } from './screens/load-project'
import { midiMappingsScreen } from './screens/midi-mappings'
import { midiSettingsScreen } from './screens/midi-settings'
import { mixerScreen } from './screens/mixer'
import { phraseScreen } from './screens/phrase'
import { projectScreen } from './screens/project'
import { renderAudioScreen } from './screens/render-audio'
import { sampleEditorScreen } from './screens/sample-editor'
import { scaleScreen } from './screens/scale'
import { limiterScreen } from './screens/scope'
import { songScreen } from './screens/song'
import { systemSettingsScreen } from './screens/system-settings'
import { tableScreen } from './screens/table'
import { themeScreen } from './screens/theme'
import { timeStatsScreen } from './screens/time-stats'

export interface M8Screen {
  id: string
  name: string
  img: string
  description: string
  categories: CategoryId[]
  activities: Activity[]
}

export type Category = (typeof categories)[number]
export type CategoryId = Category['id']
export const categories = [
  {
    id: 'sequencer',
    name: 'Sequencer & Song',
  },
  {
    id: 'system',
    name: 'System & Config',
  },
  {
    id: 'mixer',
    name: 'Mixer & Effects',
  },
  {
    id: 'instrument',
    name: 'Instruments',
  },
] as const

export const screens = [
  projectScreen,
  midiMappingsScreen,
  midiSettingsScreen,
  fileBrowser,
  renderAudioScreen,

  songScreen,
  chainScreen,
  phraseScreen,
  tableScreen,
  grooveScreen,
  scaleScreen,

  instrumentScreen,
  instrumentModsScreen,
  sampleEditorScreen,

  fxSettingsScreen,
  mixerScreen,
  limiterScreen,
  equalizerBankScreen,

  systemSettingsScreen,
  themeScreen,
  timeStatsScreen,
] as const satisfies M8Screen[]

export const categoryNameById = (() => {
  const byCategory = {} as Record<CategoryId, Category['name']>
  for (const category of categories) {
    byCategory[category.id] = category.name
  }
  return byCategory
})()

export const screensByCategory = (() => {
  const byCategory = {} as Record<CategoryId, M8Screen[]>
  for (const screen of screens) {
    for (const category of screen.categories) {
      const list: M8Screen[] = byCategory[category] ?? []
      list.push(screen)
      byCategory[category] = list
    }
  }
  return byCategory
})()
