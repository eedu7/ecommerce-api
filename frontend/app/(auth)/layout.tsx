import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <main className="max-w-7xl mx-auto h-screen">
            <section className="flex items-center justify-center w-full h-full">
                {children}
            </section>
        </main>
    )
}
export default Layout
