"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {signInFormSchema} from "@/app/(auth)/schemas";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import InputField from "@/components/input-field";

const SignInForm = () => {
    const form = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema), defaultValues: {
            email: "", password: ""
        }
    })

    function onSubmit(values: z.infer<typeof signInFormSchema>) {
        console.log(values);
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
            <Button type="submit" className="w-full">Submit</Button>

        </form>
    </Form>)

}
export default SignInForm
