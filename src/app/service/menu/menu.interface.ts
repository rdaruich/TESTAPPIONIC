export interface MenuI {
    title: string
    titleMenu: string
    options: MenuOptions[]
}
interface MenuOptions {
    label: string
    route: string
    icon: string
}