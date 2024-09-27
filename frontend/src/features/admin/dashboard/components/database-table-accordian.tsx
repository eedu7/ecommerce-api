"use client";
import React from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const DatabaseTableAccordian = () => {


    return (<Accordion type="multiple" className="w-full px-2">
        <AccordionItem value="user">
            <AccordionTrigger className="font-semibold ">
                User
            </AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-1.5">
                <Link href="/admin/dashboard/user">

                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                    >User</Button>
                </Link>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="category">
            <AccordionTrigger className="font-semibold ">Category</AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-1.5">
                <Link href="/admin/dashboard/category">
                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                    >Category</Button>
                </Link>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="products">
            <AccordionTrigger className="font-semibold">Products</AccordionTrigger>
            <AccordionContent>
                <Link href="/admin/dashboard/products">
                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                    >Products</Button>
                </Link>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="payment">
            <AccordionTrigger className="font-semibold">Products</AccordionTrigger>
            <AccordionContent>
                <Link href="/admin/dashboard/payment">
                    <Button variant="link" className="hover:bg-zinc-200 w-full"
                    >Payment</Button>
                </Link>
            </AccordionContent>
        </AccordionItem>
    </Accordion>)
}
export default DatabaseTableAccordian;
