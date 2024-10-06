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


export const getAllProducts = async (): Promise<ProductResponse[]> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/product`,);
    return response.data;
}

export const createProduct = async (data: CreateProductData): Promise<ProductResponse> => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/product`, data, getAuthHeader());
    return response.data;
}

export const deleteProduct = async (data: DeleteProductData) => {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_API_URL}/product/${data.id}`, getAuthHeader());
        return response.data;
}


export const editProduct = async (data: EditProductData): Promise<ProductResponse> => {
    const {id, name, description, price, stock_quantity, category_id} = data;
    const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_API_URL}/product/${id}`, {
        name, description, price, stock_quantity, category_id
    }, getAuthHeader());
    return response.data;
}