"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, Edit, MoreHorizontal, Trash} from "lucide-react"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Checkbox} from "@/components/ui/checkbox";
import React, {useState} from "react";
import {DeleteCategoryDialog} from "@/features/admin/dashboard/category/components/delete-category-dialog";
import {EditCategoryForm} from "@/features/admin/dashboard/category/components/edit-category-dialog";

export type Category = {
    id: number
    name: string
    description: string
}

export const columns: ColumnDef<Category>[] = [{
    id: "select", header: ({table}) => (<Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
    />), cell: ({row}) => (<Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
    />), enableSorting: false, enableHiding: false,
}, {
    accessorKey: "name", header: ({column}) => {
        return (<Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>)
    },
},

    {
        accessorKey: "description", header: "Description"
    }, {
        id: "actions", cell: ({row}) => {

            const category = row.original;

            const [isDeleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
            const [isEditDialogOpen, setEditDialogOpen] = useState<boolean>(false);


            return (<div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="space-x-2 flex items-center"
                                          onClick={() => setEditDialogOpen(true)}>
                            <div className="space-x-1 flex items-center text-sky-300 hover:text-sky-800">
                                <Edit className="size-4"/>
                                <span>Edit</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setDeleteDialogOpen(true)}>
                            <div className="space-x-1 flex items-center text-rose-500 hover:text-rose-800">
                                <Trash className="size-4"/>
                                <span>Delete</span>
                            </div>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Delete Dialog */}
                <DeleteCategoryDialog open={isDeleteDialogOpen} onOpenChange={setDeleteDialogOpen} id={category.id}/>

                {/*  Edit Form  */}
                <EditCategoryForm open={isEditDialogOpen} onOpenChange={setEditDialogOpen}
                                  id={category.id} description={category.description} name={category.name}
                />
            </div>)
        },
    },]
