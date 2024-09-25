import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import SignInCard from "@/features/auth/components/sign-in-card";
import SignUpCard from "@/features/auth/components/sign-up-card";

const AuthScreen = () => {
    return (
            <Tabs defaultValue="sign-in" className="w-[400px] mb-48">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                    <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="sign-in">
                    <SignInCard/>
                </TabsContent>
                <TabsContent value="sign-up">
                    <SignUpCard/>
                </TabsContent>

            </Tabs>
    )
}
export default AuthScreen;
