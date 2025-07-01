export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full h-screen flex flex-col justify-center items-center">
            {children}
        </main>
    )
}