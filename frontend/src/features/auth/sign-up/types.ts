type UserRegisterData = {
    name: string, email: string, password: string,
}

type UserRegisterResponse = {
    id: number, email: string, name: string, is_active: boolean,
}