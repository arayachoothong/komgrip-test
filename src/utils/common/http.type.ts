export default interface IResponse<T> {
    data: T;
    successed: boolean
    message: string
}