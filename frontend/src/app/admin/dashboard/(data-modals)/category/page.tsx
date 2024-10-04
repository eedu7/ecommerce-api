"use client";
import {columns} from "@/app/admin/dashboard/(data-modals)/category/columns";
import {DataTable} from "@/app/admin/dashboard/(data-modals)/category/data-table";
import {useGetAllCategories} from "@/features/admin/dashboard/category/use-get-all-categories";

const CategoryPage = () => {

    const {data} = useGetAllCategories();


    return (<div className="container mx-auto">
        <DataTable columns={columns} data={data || []}/>
    </div>)
}
export default CategoryPage




