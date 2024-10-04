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
    console.log("$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$");
    console.log(response.data);
    console.log("$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$");
    return response.data;

}