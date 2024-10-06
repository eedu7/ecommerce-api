"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUpFormSchema} from "@/app/(auth)/schemas";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import InputField from "@/components/input-field";
import {userRegisterUser} from "@/features/auth/sign-up/use-register-user";
import {Loader2} from "lucide-react";


const SignInForm = () => {
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema), defaultValues: {
            email: "", password: "", name: "", confirmPassword: "",
        }
    })


    const registerUserMutation = userRegisterUser();


    const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
        const {name, email, password} = values;

        registerUserMutation.mutate({name, email, password});

    }


    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
                control={form.control}
                name="name"
                render={({field}) => (<FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <InputField inputFieldType="user" field={field} placeholder="John Doe"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}/>

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
                        <InputField inputFieldType="password" field={field} placeholder="Password"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}/>

            <FormField
                control={form.control}
                name="confirmPassword"
                render={({field}) => (<FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                        <InputField inputFieldType="password" field={field} placeholder="Confirm Password"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}/>
            <Separator/>
            <Button type="submit" disabled={registerUserMutation.isPending} className="w-full">
                {registerUserMutation.isPending ?
                    <div className="flex gap-2 items-center"><Loader2 className="animate-spin repeat-infinite"/>
                        <span>Submitting...</span></div> : <span>Submit</span>}
            </Button>

        </form>
    </Form>)

}
export default SignInForm
