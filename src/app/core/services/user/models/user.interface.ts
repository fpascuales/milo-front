export interface UserI {
    _id: string,
    username: string,
    name: string,
    surnames: string,
    email: string,
    password: string,
    rol: string
}
export interface UserRequestI {
    username: string,
    name: string,
    surnames: string,
    email: string,
    password: string
}