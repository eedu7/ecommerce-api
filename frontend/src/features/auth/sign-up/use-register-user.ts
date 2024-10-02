import {useMutation} from "@tanstack/react-query";
import {registerUser} from "@/features/auth/sign-up/api";


export const userRegisterUser = () => {
    // @ts-ignore
    return useMutation({
        mutationFn: registerUser,

        // @ts-ignore
        onSuccess: (data) => {
            console.log("User registered successfully.");
            console.table(data);
        }, // @ts-ignore
        onError: (error) => {
            console.log("User registered successfully.");
            console.error(error);
        },
    });
}
