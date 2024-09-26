"use client"


import {useForm} from "react-hook-form";
import {z} from "zod";
import {signInFormSchema} from "@/features/auth/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {loginUser} from "@/features/auth/api";
import {useState} from "react";
import {EyeIcon, EyeOff, Loader, LockIcon, MailIcon} from "lucide-react";

const SignInForm = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof signInFormSchema>>({
            resolver: zodResolver(signInFormSchema),
            defaultValues: {
                email: "",
                password: "",
            }
        }
    )
    const onSubmit = async (values: z.infer<typeof signInFormSchema>) => {
        setLoading(true);
        new Promise(resolve => setTimeout(resolve, 2000))

        const response = await loginUser(values);
        console.table(response);
        setLoading(false);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input type="email" className="pl-10"
                                           placeholder="john.doe@example.com" {...field} />
                                    <MailIcon className="absolute size-6 bottom-1.5 left-2 text-muted-foreground"/>
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input type={showPassword ? "text" : "password"} className="pl-10"
                                           placeholder="Password" {...field} />
                                    <LockIcon className="absolute size-6 bottom-1.5 left-2 text-muted-foreground"/>
                                    {
                                        showPassword ?
                                            <EyeOff onClick={() => setShowPassword(false)}
                                                    className="absolute text-muted-foreground size-6 bottom-1.5 right-2 hover:text-black cursor-pointer"/> :
                                            <EyeIcon onClick={() => setShowPassword(true)}
                                                     className="absolute text-muted-foreground size-6 bottom-1.5 right-2 hover:text-black cursor-pointer"/>
                                    }
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button disabled={loading} type="submit" className="w-full">{loading ? <div className="flex gap-2 justify-center items-center w-full"><Loader className="animate-spin" /> Submitting...</div>:  "Submit"}</Button>
            </form>
        </Form>
    )
}
export default SignInForm
