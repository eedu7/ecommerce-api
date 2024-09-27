import {create} from "zustand";

type DataTableType = "user" | "address" | "category" | "product";

interface DataTableStore {
    currentTable: DataTableType;
    setCurrentTable: (tab: DataTableType) => void;
}

const useDataTable = create<DataTableStore>((set) => ({
    currentTable: "user",
    setCurrentTable: (table: DataTableType) => {

        set({currentTable: table});
    }
}))

export default useDataTable;

