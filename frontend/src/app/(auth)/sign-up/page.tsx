import React from 'react'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import LogoIpsumIcon from "@/assets";
import {Separator} from "@/components/ui/separator";
import SignUpForm from "@/app/(auth)/sign-up/sign-up-form";
import Link from "next/link";

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
        <CardFooter>
            <Link href="/sign-in" className="w-full">
                <p className="text-sm text-right w-full text-muted-foreground">
                    Already have an account? <span
                    className="text-sky-300 cursor-pointer hover:underline">Login here!</span>
                </p>
            </Link>
        </CardFooter>
    </Card>
}
export default SignUpPage
