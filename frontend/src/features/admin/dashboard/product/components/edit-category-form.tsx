import {Button} from "@/components/ui/button"
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useGetAllCategories} from "@/features/admin/dashboard/category/use-get-all-categories";
import React from "react";
import {useEditProduct} from "@/features/admin/dashboard/product/use-edit-product";

interface EditProductFormProps {
    id: number,
    open: boolean;
    onOpenChange: (open: boolean) => void;
    product: {
        id: number; name: string; description: string; price: number; stock_quantity: number; category: {
            id: number, name: string, description: string
        };
    }
}

export const EditProductForm: React.FC<EditProductFormProps> = ({
                                                                    open, onOpenChange, product, id
                                                                }) => {

    const [name, setName] = React.useState(product.name);
    const [description, setDescription] = React.useState(product.description);
    const [price, setPrice] = React.useState(product.price);
    const [stockQuantity, setStockQuantity] = React.useState(product.stock_quantity);
    const [categoryId, setCategoryId] = React.useState(product.category.id);


    const {data} = useGetAllCategories();

    const useEditProductMutation = useEditProduct();

    const handleSubmit = () => {

        const product_data = {
            id, name, description, price: price, stock_quantity: stockQuantity, category_id: categoryId
        }

        useEditProductMutation.mutate(product_data)
    }

    return (<Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit product</DialogTitle>
                <DialogDescription>
                    Make changes to your product here. Click save when you're done.
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
                        placeholder={name}
                        value={name}
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
                        placeholder={description}
                        value={description}
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
                        placeholder={`${price}`}
                        value={price}
                        onChange={(event) => setPrice(parseFloat(event.target.value))}
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
                        placeholder={`${stockQuantity}`}
                        value={stockQuantity}
                        onChange={(event) => setStockQuantity(parseFloat(event.target.value))}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                        Category
                    </Label>
                    <Select onValueChange={value => setCategoryId(parseInt(value))} defaultValue={`${categoryId}`}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                {data?.map(category => (<SelectItem key={category.id}
                                                                    value={`${category.id}`}>{category.name}</SelectItem>))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

            </div>
            <DialogFooter>
                <Button type="submit"
                        onClick={handleSubmit}>{useEditProductMutation.isPending ? "Editing..." : "Edit"}</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}
