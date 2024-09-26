"use client";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import SignInCard from "@/features/auth/components/sign-in-card";
import SignUpCard from "@/features/auth/components/sign-up-card";
import useAuthStore from "@/contexts/use-auth-store";

const AuthScreen = () => {
    const {currentTab, setCurrentTab} = useAuthStore();

    return (
        <Tabs
            defaultValue={currentTab}
            onValueChange={setCurrentTab}
            className="w-[400px] mb-48"
            aria-label="Authentication Tabs"
        >
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sign-in" aria-label="Sign In Tab">Sign In</TabsTrigger>
                <TabsTrigger value="sign-up" aria-label="Sign Up Tab">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
                <SignInCard/>
            </TabsContent>
            <TabsContent value="sign-up">
                <SignUpCard/>
            </TabsContent>
        </Tabs>
    );
}

export default AuthScreen;
