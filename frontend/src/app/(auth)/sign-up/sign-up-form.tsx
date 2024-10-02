"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUpFormSchema} from "@/app/(auth)/schemas";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import InputField from "@/components/input-field";

const SignInForm = () => {
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema), defaultValues: {
            email: "", password: "", name: "", confirmPassword: "",
        }
    })

    function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        console.log(values);
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
                        <InputField inputFieldType="password" field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}/>

            <FormField
                control={form.control}
                name="confirmPassword"
                render={({field}) => (<FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                        <InputField inputFieldType="password" field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}/>
            <Separator/>
            <Button type="submit" className="w-full">Submit</Button>

        </form>
    </Form>)

}
export default SignInForm
