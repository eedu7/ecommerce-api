import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

export const SignInCard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Card className="w-full h-full">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Login to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input
                        disabled={false}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={false}>Continue</Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                     <Button disabled onClick={() => {}} variant="outline" size="lg" className="w-full relative"><FcGoogle className="size-5 absolute left-3 top-2.5" /> Continue with Google</Button>
                     <Button disabled onClick={() => {}} variant="outline" size="lg" className="w-full relative"><FaGithub className="size-5 absolute left-3 top-2.5" /> Continue with Github</Button>
                </div>
            </CardContent>
        </Card>
    )
}