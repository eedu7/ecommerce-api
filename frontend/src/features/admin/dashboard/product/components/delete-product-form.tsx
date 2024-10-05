import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import React from "react";
import {useDeleteProduct} from "@/features/admin/dashboard/product/use-delete-product";

interface DeleteProductDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    id: number
}


export const DeleteProductDialog: React.FC<DeleteProductDialogProps> = ({open, onOpenChange, id}) => {

    const useDeleteProductMutation = useDeleteProduct();
    const handleDelete = () => {

        useDeleteProductMutation.mutate({id});

    }


    return (<AlertDialog open={open} onOpenChange={onOpenChange}>

        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDelete()}>Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>)
}