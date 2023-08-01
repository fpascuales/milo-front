export interface UserI {
    _id?: string;
    username: string;
    password: string;
}

export interface UserSignInResponseI {
    user: UserI;
}