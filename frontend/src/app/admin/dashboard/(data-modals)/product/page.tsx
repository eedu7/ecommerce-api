"use client";
import React from 'react'
import {DataTable} from "@/app/admin/dashboard/(data-modals)/product/data-table";
import {columns} from "@/app/admin/dashboard/(data-modals)/product/columns";
import {useGetAllProducts} from "@/features/admin/dashboard/product/use-get-all-products";


const ProductPage = () => {

    const {data} = useGetAllProducts();


    return (<div className="container mx-auto">
        <DataTable columns={columns} data={data || []}/>
    </div>)
}
export default ProductPage;
