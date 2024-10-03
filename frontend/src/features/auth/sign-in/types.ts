type UserLoginData = {
    email: string;
    password: string;
}

type UserLoginResponse = {
    access_token: string;
    refresh_token: string;
    exp: number;
}