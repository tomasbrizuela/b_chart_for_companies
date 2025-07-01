"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/sidebar_home";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <SidebarProvider
            open={open}
            onOpenChange={setOpen}
            className=""
            style={{}}
        >            <AppSidebar />
            <main className="w-screen h-screen">
                <SidebarTrigger className={undefined} onClick={undefined} />
                {children}
            </main>
        </SidebarProvider>
    )
}