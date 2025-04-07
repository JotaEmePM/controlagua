export interface IOperationResult<T> {
    success: Boolean
    message?: string
    data?: T
}