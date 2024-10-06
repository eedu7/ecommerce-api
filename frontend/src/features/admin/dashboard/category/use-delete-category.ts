import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCategory} from "@/features/admin/dashboard/category/api";


export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteCategory,
    })
}