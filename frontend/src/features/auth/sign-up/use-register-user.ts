import {useMutation} from "@tanstack/react-query";
import {registerUser} from "@/features/auth/sign-up/api";


export const userRegisterUser = () => {
    // @ts-ignore
    return useMutation({
        mutationFn: registerUser,
    });
}
