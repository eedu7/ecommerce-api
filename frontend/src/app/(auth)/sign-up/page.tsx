import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import LogoIpsumIcon from "@/assets";
import {Separator} from "@/components/ui/separator";
import SignUpForm from "@/app/(auth)/sign-up/sign-up-form";

const SignUpPage = () => {
    return <Card className="w-[400px]">
        <CardHeader className="flex flex-col items-center justify-center w-full">
            <CardTitle>
                <Image src={LogoIpsumIcon} alt="Logo" className="size-8"/>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">Hi, there, welcome!</CardDescription>
            <Separator/>

        </CardHeader>
        <CardContent>
            <SignUpForm/>
        </CardContent>
    </Card>
}
export default SignUpPage
