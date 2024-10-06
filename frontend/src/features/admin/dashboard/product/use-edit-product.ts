import {useMutation} from "@tanstack/react-query";
import {editProduct} from "@/features/admin/dashboard/product/api";

export const useEditProduct = () => {
    return useMutation({
        mutationFn: editProduct, mutationKey: ["edit-product"]
    })
}