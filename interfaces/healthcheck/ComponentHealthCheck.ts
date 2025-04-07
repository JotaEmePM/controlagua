export type ComponentHealthCheck = {
    name: 'WEB' | 'DATABASE'
    result: 'OK' | 'ERROR',
    message?: string
}