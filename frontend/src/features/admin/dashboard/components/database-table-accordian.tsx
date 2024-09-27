"use client";
import React, {useEffect} from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import useDataTable from "@/contexts/use-data-table";

const DatabaseTableAccordian = () => {

    const {currentTable, setCurrentTable} = useDataTable();

    useEffect(() => {
        console.log(currentTable)
    }, [currentTable])

    return (
        <Accordion type="multiple" className="w-full px-2">
            <AccordionItem value="user">
                <AccordionTrigger className="font-semibold ">
                    User
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1.5">
                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                            onClick={() => setCurrentTable("user")}>User</Button>
                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                            onClick={() => setCurrentTable("address")} disabled>Address</Button>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="category">
                <AccordionTrigger className="font-semibold ">Category</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1.5">
                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                            onClick={() => setCurrentTable("category")}>Category</Button>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="products">
                <AccordionTrigger className="font-semibold">Products</AccordionTrigger>
                <AccordionContent>
                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                            onClick={() => setCurrentTable("product")}>Products</Button>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
export default DatabaseTableAccordian;
