import React from 'react'
import useDataTable from "@/contexts/use-data-table";

const SelectDataTable = async () => {

    const {currentTable} = useDataTable();

    switch (currentTable) {
        case "user":
            return <div>User</div>
        case "category":
            return <div>Category</div>
        case "address":
            return <div>Address</div>
        case "product":
            return <div>Product</div>
        default:
            return null;
    }

}
export default SelectDataTable
