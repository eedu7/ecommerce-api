"use client";
import React from 'react'
import {Input} from "@/components/ui/input";
import {EyeIcon, Lock, Mail, User} from "lucide-react";
import {EyeClosedIcon} from "@radix-ui/react-icons";

type inputType = "password" | "email" | "user";

interface InputFieldProps {
    inputFieldType: inputType,
    type?: string,
    required?: boolean
    placeholder?: string
    field?: any

}

const InputField: React.FC<InputFieldProps> = ({
                                                   inputFieldType,
                                                   type = "text",
                                                   required = false,
                                                   placeholder = "",
                                                   field
                                               }) => {

    const [showPassword, setShowPassword] = React.useState<boolean>(false);


    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    }

    switch (inputFieldType) {
        case "password":
            return (<div className="relative group">
                    <Input className="px-8" type={`${showPassword ? "text" : "password"}`} required={required}
                           placeholder={placeholder} {...field} />
                    <Lock
                        className="size-5 absolute bottom-2 left-2 text-muted-foreground group-hover:text-black transition-all"/>
                    {showPassword ? <EyeIcon onClick={handleShowPassword}
                                             className="absolute right-2 bottom-2 size-5 text-muted-foreground hover:text-black"/> :
                        <EyeClosedIcon onClick={handleShowPassword}
                                       className="absolute right-2 bottom-2 size-5 text-muted-foreground  hover:text-black"/>}

                </div>


            );
        case "email":
            return (<div className="relative group">
                    <Input className="pl-8" type="email" required={required} placeholder={placeholder} {...field} />
                    <Mail
                        className="size-5 absolute bottom-2 left-2 text-muted-foreground group-hover:text-black transition-all"/>
                </div>

            );

        case "user":
            return (<div className="relative group">
                    <Input className="pl-8" type="email" required={required} placeholder={placeholder} {...field} />
                    <User
                        className="size-5 absolute bottom-2 left-2 text-muted-foreground group-hover:text-black transition-all"/>
                </div>

            );

        default:
            return <Input type={type} required={required} placeholder={placeholder} {...field} />

    }


}
export default InputField
