import {useMutation} from "@tanstack/react-query";
import {createProduct} from "@/features/admin/dashboard/product/api";

export const useCreateProduct = () => {
    return useMutation({
        mutationFn: createProduct, mutationKey: ["create-product"]
    })
}