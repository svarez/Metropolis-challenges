import { Affiliation } from "./Affiliation";

export interface Editor {
    followers: number;
    fullName: string;
    id: number;
    pictureUrl: string;
    profileUrl: string;
    publications: number;
    role: string;
    views: number;
    affiliations: Affiliation[];
}