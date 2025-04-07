export interface ICondominio {
    nombre: string
    slug: string
    email: string
    rut: string
    avatar: string
    valid_from: Date
    user_admin: string[]
    enabled: boolean
    visible: boolean    
}