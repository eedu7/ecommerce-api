type ProductResponse = {
    id: number; name: string; description: string; price: number; stock_quantity: number; category: {
        id: number; name: string; description: string;
    }
}


type CreateProductData = {
    name: string; description: string; price: number; stock_quantity: number; category_id: number;
}
type DeleteProductData = {
    id: number;
}


type EditProductData = {
    id: number,name: string; description: string; price: number; stock_quantity: number; category_id: number;
}