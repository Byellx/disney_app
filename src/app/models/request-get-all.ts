import { Character } from './character'
import { PageInfo } from './page-info'

export interface RequestGetAll{
    data: Character[]
    info: PageInfo
}