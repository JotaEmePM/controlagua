import { IConnectionError } from './IConnectionError'

export interface IConnectionResult<T> {
    success: boolean
    data?: T
    error?: IConnectionError
}