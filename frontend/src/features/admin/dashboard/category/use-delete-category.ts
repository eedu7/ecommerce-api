import {useMutation} from "@tanstack/react-query";
import {deleteCategory} from "@/features/admin/dashboard/category/api";


export const useDeleteCategory = () => {
    return useMutation({
        mutationFn: deleteCategory,
    })
}