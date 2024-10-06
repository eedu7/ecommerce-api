import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useToast} from "@/hooks/use-toast";
import {editCategory} from "@/features/admin/dashboard/category/api";


export const useEditCategory = () => {
    const {toast} = useToast();
    const queryClient = useQueryClient();
    // @ts-ignore
    return useMutation({
        mutationFn: editCategory, onSuccess: (data) => {
            console.table(data)
        }, onError: (error) => {
            console.error(error)
            toast({
                variant: "destructive", title: "Error on editing a category",
            })
        }
    });
}