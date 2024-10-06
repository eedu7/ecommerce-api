import {useMutation} from "@tanstack/react-query";
import {deleteProduct} from "@/features/admin/dashboard/product/api";

export const useDeleteProduct = () => {
    return useMutation({
        mutationFn: deleteProduct, mutationKey: ["delete-product"]
    })
}