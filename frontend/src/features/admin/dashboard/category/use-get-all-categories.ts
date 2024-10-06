
import {useQuery} from "@tanstack/react-query";
import {getAllCategories} from "@/features/admin/dashboard/category/api";


export const useGetAllCategories = () => {
    // @ts-ignore
    return useQuery({
        queryFn: getAllCategories,
        queryKey: ["categories"]
    });

}