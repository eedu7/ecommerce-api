"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {signInFormSchema} from "@/app/(auth)/schemas";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import InputField from "@/components/input-field";
import {useLoginUser} from "@/features/auth/sign-in/use-login-user";
import {Loader2} from "lucide-react";
import {useToast} from "@/hooks/use-toast";

const SignInForm = () => {
    const form = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema), defaultValues: {
            email: "", password: ""
        }
    })


    const loginUserMutation = useLoginUser();
    const {toast} = useToast();
    function onSubmit(values: z.infer<typeof signInFormSchema>) {
        loginUserMutation.mutate(values);

        if (loginUserMutation.error) {
            toast({
                variant: "destructive",
                title: "Invalid Credentials"
            })
        }

    }


    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
                control={form.control}
                name="email"
                render={({field}) => (<FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <InputField inputFieldType="email" field={field} placeholder="john.doe@example.com"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}/>
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (<FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <InputField inputFieldType="password" field={field} placeholder="john.doe@example.com"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}/>
            <Separator/>
            <Button type="submit" disabled={loginUserMutation.isPending} className="w-full">
                {loginUserMutation.isPending ?
                    <div className="flex gap-2 items-center"><Loader2 className="animate-spin repeat-infinite"/>
                        <span>Logging...</span></div> : <span>Log In</span>}
            </Button>

        </form>
    </Form>)

}
export default SignInForm
