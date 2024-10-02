import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import SignInForm from "@/app/(auth)/sign-in/sign-in-form";
import Image from "next/image";
import LogoIpsumIcon from "@/assets";
import {Separator} from "@/components/ui/separator";

const SignInPage = () => {
    return <Card className="w-[400px]">
        <CardHeader className="flex flex-col items-center justify-center w-full">
            <CardTitle>
                <Image src={LogoIpsumIcon} alt="Logo" className="size-8"/>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">Welcome back! Please sign in</CardDescription>
            <Separator/>
            
        </CardHeader>
        <CardContent>
            <SignInForm/>
        </CardContent>
    </Card>
}
export default SignInPage
