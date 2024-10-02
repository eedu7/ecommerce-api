import axios from "axios";

export const loginUser = async (data: UserLoginData): Promise<UserLoginResponse> => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/login`, data);
    return response.data;
};