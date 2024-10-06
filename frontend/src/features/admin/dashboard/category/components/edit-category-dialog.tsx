import {Button} from "@/components/ui/button"
import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Loader} from "lucide-react";
import React from "react";
import {useEditCategory} from "@/features/admin/dashboard/category/use-edit-category";

interface EditCategoryDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    id: number;
    name: string,
    description: string
}


export const EditCategoryForm: React.FC<EditCategoryDialogProps> = ({open, onOpenChange, id, description, name}) => {

    const [updatedName, setUpdatedName] = React.useState(name);
    const [updatedDescription, setUpdatedDescription] = React.useState(description);

    const useEditCategoryMutation = useEditCategory();


    const handleSubmit = () => {
        const data = {
            id: id, name: updatedName, description: updatedDescription
        };
        useEditCategoryMutation.mutate(data);
        onOpenChange(false);
    }


    return (<Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit Category</DialogTitle>
                <DialogDescription>
                    Edit existing category, with their name and description.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        className="col-span-3"
                        placeholder={updatedName}
                        value={updatedName}
                        onChange={(event) => setUpdatedName(event.target.value)}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description">
                        Description
                    </Label>
                    <Input
                        id="description"
                        className="col-span-3"
                        placeholder={updatedDescription}
                        value={updatedDescription}
                        onChange={(event) => setUpdatedDescription(event.target.value)}
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" onClick={handleSubmit}
                        disabled={useEditCategoryMutation.isPending}>{useEditCategoryMutation.isPending ?
                    <div className="flex gap-2 items-center">
                        <Loader className="animate-spin repeat-infinite"/> <span>Editing</span>
                    </div> : <div>Edit</div>}</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}
