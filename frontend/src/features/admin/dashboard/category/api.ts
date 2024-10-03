import axios from "axios";

export const getAllCategories = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories`);
    return response.data;
}


export const getCategories = async (data: GetCategoryData) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories/${data.id}`);
    return response.data;
}


export const createCategory = async (data: CategoryData): Promise<CategoryResponse> => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories`, data);
    return response.data;
}

export const editCategory = async (data: CategoryData): Promise<CategoryResponse> => {
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories`, data);
    return response.data;
}


export const deleteCategory = async (data: DeleteCategoryData) => {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories/${data.id}`);
    return response.data;
}