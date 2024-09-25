import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const SignUpCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription className="text-muted-foreground">Sign up with email and password or existing
                    services</CardDescription>
            </CardHeader>
            <CardContent>
                <div>Sign Up Form</div>
            </CardContent>
        </Card>
    )
}
export default SignUpCard
