"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {MailIcon, User} from "lucide-react";
import {EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";
import axios from "axios";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";

const formSchema = z
    .object({
        name: z
            .string()
            .min(3, {message: "Username must be at least 3 characters long"})
            .max(50, {message: "Username must be at most 50 characters long"}),
        email: z.string().email({message: "Email must be valid."}),
        password: z
            .string()
            .min(8, {message: "Password must be at least 8 characters long"})
            .max(30, {message: "Password must be at most 30 characters long"}),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match", path: ["confirmPassword"],
    });


const Page = () => {

    const {toast} = useToast();
    const [loading, setLoading] = useState(false);
    const {push} = useRouter();


    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    }



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            name: "", email: "", password: "", confirmPassword: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);

        axios.post("http://localhost:8000/users/", {name: values.name, email: values.email, password: values.password})
            .then(response => {
                console.log("Response Data:", response.data);
                setLoading(false);
                push("/");
            })
            .catch(error => {
                setLoading(false);
                console.log("Error:", error);
                const errorMessage = error.response?.data?.detail || "Something went wrong. Please try again.";

                toast({
                    variant: "destructive",
                    title: "uh oh! Something went wrong.",
                    description: errorMessage,
                 })
            })
    };

    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full md:w-8/12 lg:w-6/12 p-12 dark:bg-black/80 rounded">
            <h1 className="text-center sm:text-xl md:text-4xl font-semibold">Sign Up</h1>
            <FormField
                control={form.control}
                name="name"
                render={({field}) => (<FormItem className="">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input className="dark:bg-gray-900 pl-10" placeholder="John Doe" {...field} />
                            <User className="absolute bottom-1.5 left-2"/>
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (<FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input className="dark:bg-gray-900 pl-10" placeholder="john.doe@gmail.com" {...field} />
                            <MailIcon className="absolute bottom-1.5 left-2"/>
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (<FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input className="dark:bg-gray-900" placeholder="Password"
                                   type={showPassword ? "text" : "password"} {...field} />
                            {!showPassword ? <EyeClosedIcon onClick={togglePassword}
                                                            className="absolute bottom-2 size-4 right-3 cursor-pointer"/> :
                                <EyeOpenIcon onClick={togglePassword}
                                         className="absolute bottom-2 size-4 right-3 cursor-pointer"/>}

                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="confirmPassword"
                render={({field}) => (<FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                        <Input className="dark:bg-gray-900" placeholder="Confirm password"
                               type={showPassword ? "text" : "password"} {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <Button type="submit" className="w-full" disabled={loading}>Submit</Button>
        </form>
    </Form>);
}
export default Page;
