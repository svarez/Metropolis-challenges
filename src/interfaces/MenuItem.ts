export interface MenuItem {
    id: number
    label: string
    level: number
    isExpanded?: boolean
    children?: MenuItem[]
}