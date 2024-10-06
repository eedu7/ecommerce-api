import {useQuery} from "@tanstack/react-query";
import {getAllProducts} from "@/features/admin/dashboard/product/api";


export const useGetAllProducts = () => {
    // @ts-ignore
    return useQuery({
        queryFn: getAllProducts, queryKey: ["get-all-products"]
    });

}