import {useMutation} from "@tanstack/react-query";
import {registerUser} from "@/features/auth/sign-up/api";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";


export const userRegisterUser = () => {

    const router = useRouter();
    const {toast} = useToast();
    // @ts-ignore
    return useMutation({
        mutationFn: registerUser, onSuccess: () => {
            router.push("/sign-in");
        }, onError: () => {
            toast({
                variant: "destructive", title: "Invalid credentials",
            })
        }
    });
}
