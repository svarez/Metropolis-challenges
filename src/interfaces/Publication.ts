import { Author } from "./Author"

export interface Publication {
    type?: string
    title?: string
    journal?: string
    section?: string
    editor?: Author
    yourself?: Author
    authors?: Author[]
}