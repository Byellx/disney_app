import { Character } from "./character";
import { PageInfo } from "./page-info";

export interface RequestGetOne{
    data: Character,
    info: PageInfo
}