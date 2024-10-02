import {useMutation} from "@tanstack/react-query";
import {loginUser} from "@/features/auth/sign-in/api";

export const useLoginUser = () => {
    // @ts-ignore
    return useMutation({
        mutationFn: loginUser, onSuccess: (data) => {
            //     TODO: save the token
            console.table(data);
        }, onError: (error) => {
            //     TODO: open toast here
        }
    });
}