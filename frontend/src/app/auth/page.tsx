import React from 'react'
import AuthScreen from "@/features/auth/components/auth-screen";

const Page = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <div className="h-44" />
            <section className="w-full flex justify-center items-center">
                <AuthScreen />
            </section>
        </main>
    )
}
export default Page
