import {useMutation} from "@tanstack/react-query";
import {loginUser} from "@/features/auth/sign-in/api";
import {useToast} from "@/hooks/use-toast";
import Cookie from "js-cookie";
import {useRouter} from "next/navigation";

export const useLoginUser = () => {
    const {toast} = useToast();
    const router = useRouter();
    // @ts-ignore
    return useMutation({
        mutationFn: loginUser, onSuccess: (data) => {
            Cookie.set("token", JSON.stringify(data));
            router.push("/admin/dashboard");

        }, onError: () => {
            toast({
                variant: "destructive", title: "Invalid credentials",
            })
        }
    });
}