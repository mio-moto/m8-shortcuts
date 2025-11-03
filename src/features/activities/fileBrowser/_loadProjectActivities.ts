import { deleteFile } from './delete'
import { exit } from './exit'
import { preview } from './preview'
import { quickTop } from './quickTop'
import { sort } from './sort'
import { stepFast } from './stepFast'
import { stepSlow } from './stepSlow'

export const loadProjectActivities = [stepSlow, stepFast, quickTop, sort, preview, exit, deleteFile]
