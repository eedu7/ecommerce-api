import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useToast} from "@/hooks/use-toast";
import {createCategory} from "@/features/admin/dashboard/category/api";


export const useCreateCategory = () => {
    const queryClient = useQueryClient();
    const {toast} = useToast();
    // @ts-ignore
    return useMutation({
        mutationFn: createCategory, onSuccess: (data) => {
            console.table(data)
        }, onError: (error) => {
            console.error(error)
            toast({
                variant: "destructive", title: "Error on adding a category",
            })
        }
    });
}