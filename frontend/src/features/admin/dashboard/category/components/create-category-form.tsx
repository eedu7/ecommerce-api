import {Button} from "@/components/ui/button"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Loader, Plus} from "lucide-react";
import React from "react";
import {useCreateCategory} from "@/features/admin/dashboard/category/use-create-category";

export function CreateCategoryForm() {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const useCreateCategoryMutation = useCreateCategory();


    const handleSubmit = () => {
        const data = {name, description};
        useCreateCategoryMutation.mutate(data);
    }


    return (<Dialog>
        <DialogTrigger asChild>
            <Button>
                <Plus className="size-4 mx-2"/> Add
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add Category</DialogTitle>
                <DialogDescription>
                    Add new category, with their description.
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
                        placeholder="Enter name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description">
                        Description
                    </Label>
                    <Input
                        id="description"
                        className="col-span-3"
                        placeholder="Enter description"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" onClick={handleSubmit}
                        disabled={useCreateCategoryMutation.isPending}>{useCreateCategoryMutation.isPending ?
                    <div className="flex gap-2 items-center">
                        <Loader className="animate-spin repeat-infinite"/> <span>Adding</span>
                    </div> : <div>Add</div>}</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}
