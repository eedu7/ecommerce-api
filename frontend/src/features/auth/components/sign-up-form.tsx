"use client"


import {useForm} from "react-hook-form";
import {z} from "zod";
import {signUpFormSchema} from "@/features/auth/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const SignUpForm = () => {

    const form = useForm<z.infer<typeof signUpFormSchema>>({
            resolver: zodResolver(signUpFormSchema),
            defaultValues: {
                email: "",
                password: "",
            }
        }
    )
    const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
        console.table(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <div>
                                    <Input  placeholder="John Doe" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <div>
                                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <div>
                                    <Input type="password" placeholder="Password" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </Form>
    )
}
export default SignUpForm
