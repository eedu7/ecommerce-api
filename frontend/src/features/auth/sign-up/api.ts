import axios from "axios";


export async function registerUser (data: UserRegisterData): Promise<UserRegisterResponse> {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/`, data);
    return response.data;
}