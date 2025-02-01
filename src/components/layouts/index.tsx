"use client"
import { FC, ReactNode, useEffect, useState } from "react"
import Header from "./header";
import Navbar from "./navbar";
import { useCreateReducer } from "@/hooks/useCreateReducer";
import { HomeInitialState, initialState } from "@/state/index.state";
import HomeContext from "@/state/index.context";
import Faq from "../feq";
import { useRouter, usePathname } from "next/navigation";

interface Props {
    children: ReactNode,
}
const Layout: FC<Props> = ({ children }) => {
    const [page, setPage] = useState("");
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const contextValue = useCreateReducer<HomeInitialState>({
        initialState,
    });

    useEffect(() => {
        setPage(pathname);
        setIsClient(true);
    }, [pathname])

    return (
        isClient && <HomeContext.Provider
            value={{
                ...contextValue,
            }}
        >
            {
                page == "/login" ?
                    children :
                    <div>
                        <Header
                        />
                        <main className="w-full bg-gray-200 flex flex-1">
                            <Navbar
                            />
                            <div className="main-content overflow-auto w-full h-full px-[20px] py-[20px]"
                                id="mainContent">
                                {children}
                            </div>
                        </main>
                        <Faq />
                    </div>
            }

        </HomeContext.Provider>
    )
}

export default Layout;