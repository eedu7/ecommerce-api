import {Button} from "@/components/ui/button"
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Plus} from "lucide-react";
import {useGetAllCategories} from "@/features/admin/dashboard/category/use-get-all-categories";
import React from "react";
import {useCreateProduct} from "@/features/admin/dashboard/product/use-create-product";

export function CreateProductForm() {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [stockQuantity, setStockQuantity] = React.useState("");
    const [categoryId, setCategoryId] = React.useState("");


    const {data} = useGetAllCategories();

    const useCreateProductMutation = useCreateProduct();

    const handleSubmit = () => {

        const product_data = {
            name,
            description,
            price: parseFloat(price),
            stock_quantity: parseFloat(stockQuantity),
            category_id: parseInt(categoryId)
        }

        useCreateProductMutation.mutate(product_data)
    }

    return (<Dialog>
        <DialogTrigger asChild>
            <Button className="space-x-1">
                <Plus className="size-4"/>
                <span>Add</span>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                    <Input
                        id="name"
                        defaultValue="Apple iPhone 15 Pro"
                        className="col-span-3"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                        Description
                    </Label>
                    <Input
                        id="description"
                        defaultValue="Powerful 5G smartphone with advanced camera and sleek design."
                        className="col-span-3"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="price" className="text-right">
                        Price
                    </Label>
                    <Input
                        id="price"
                        defaultValue="1"
                        className="col-span-3"
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stock-quantity" className="text-right">
                        Stock
                    </Label>
                    <Input
                        id="stock-quantity"
                        defaultValue="1"
                        className="col-span-3"
                        onChange={(event) => setStockQuantity(event.target.value)}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                        Category
                    </Label>
                    <Select onValueChange={value => setCategoryId(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                {data?.map(category => (
                                    <SelectItem key={category.id} value={`${category.id}`}>{category.name}</SelectItem>))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

            </div>
            <DialogFooter>
                <Button type="submit" onClick={handleSubmit}>Add</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}
