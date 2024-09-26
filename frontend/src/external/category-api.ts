import axios from "axios";


export const get_all_categories = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/categories`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}