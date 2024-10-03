import {Category, columns} from "@/app/admin/dashboard/(data-modals)/category/columns";
import {DataTable} from "@/app/admin/dashboard/(data-modals)/category/data-table";
import Cookies from "js-cookie";

async function getData(): Promise<Category[]> {
    // Fetch data from your API here.
    return [{
        "id": 1, "name": "Electronics", "description": "Devices and gadgets like smartphones, laptops, and cameras."
    }, {
        "id": 2, "name": "Fashion", "description": "Clothing, accessories, and footwear for men, women, and children."
    }, {
        "id": 3, "name": "Home & Kitchen", "description": "Furniture, decor, appliances, and other home essentials."
    }, {
        "id": 4, "name": "Books", "description": "Wide range of books across different genres and languages."
    }, {
        "id": 5, "name": "Sports & Outdoors", "description": "Equipment and gear for outdoor activities and sports."
    }]
}


const CategoryPage = async () => {
    const data = await getData();

    return (<div className="container mx-auto">
        <DataTable columns={columns} data={data}/>
    </div>)
}
export default CategoryPage




