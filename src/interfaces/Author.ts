import { Affiliation } from "./Affiliation"
  
export interface Author {
    id: number
    fullName: string
    role: string
    publications: number
    views: number
    pictureUrl: string
    profileUrl: string
    followers: number
    affiliations: Affiliation[]
}