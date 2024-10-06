import axios from "axios";
import Cookies from "js-cookie";

const getAuthHeader = () => {
    const token = Cookies.get("token")

    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
};


export const getAllCategories = async (): Promise<CategoryResponse[]> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories`,);
    return response.data;
}


export const getCategories = async (data: GetCategoryData): Promise<CategoryResponse> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories/${data.id}`);
    return response.data;
}


export const createCategory = async (data: CategoryData): Promise<CategoryResponse> => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories`, data, getAuthHeader());
    return response.data;
}

export const editCategory = async (data: EditCategoryData): Promise<CategoryResponse> => {
    const {id, name, description} = data;
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories/${id}`, {
        name,
        description
    }, getAuthHeader());
    return response.data;
}


export const deleteCategory = async (data: DeleteCategoryData) => {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories/${data.id}`, getAuthHeader());
    return response.data;
}