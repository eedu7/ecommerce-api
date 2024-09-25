import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import SignInForm from "@/features/auth/components/sign-in-form";

const SignInCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription className="text-muted-foreground">Sign in with password or existing
                    services</CardDescription>
            </CardHeader>
            <CardContent>
                <SignInForm />
            </CardContent>
        </Card>
    )
}
export default SignInCard
