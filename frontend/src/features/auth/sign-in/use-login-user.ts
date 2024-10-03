import {useMutation} from "@tanstack/react-query";
import {loginUser} from "@/features/auth/sign-in/api";
import {useToast} from "@/hooks/use-toast";
import Cookie from "js-cookie";

export const useLoginUser = () => {
    const {toast} = useToast();
    // @ts-ignore
    return useMutation({
        mutationFn: loginUser, onSuccess: (data) => {
            Cookie.set("token", JSON.stringify(data));
        }, onError: () => {
            toast({
                variant: "destructive", title: "Invalid credentials",
            })
        }
    });
}