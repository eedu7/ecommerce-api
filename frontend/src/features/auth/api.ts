import {LoginUser, RegisterUser} from "@/features/auth/types";
import axios from "axios";


export const loginUser = async (values: LoginUser) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/login`, JSON.stringify(values), {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (values: RegisterUser) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users`, JSON.stringify(values), {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

