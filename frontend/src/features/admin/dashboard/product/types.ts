type ProductResponse = {
    id: number; name: string; description: string; price: number; stock_quantity: number; category: {
        id: number; name: string; description: string;
    }
}
