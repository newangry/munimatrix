"use client"
import { FC, ReactNode, useState } from "react"
import Header from "./header";
import Navbar from "./navbar";
import { useCreateReducer } from "@/hooks/useCreateReducer";
import { HomeInitialState, initialState } from "@/state/index.state";
import HomeContext from "@/state/index.context";
import Faq from "../feq";
interface Props {
    children: ReactNode,
}
const Layout: FC<Props> = ({ children }) => {
    const contextValue = useCreateReducer<HomeInitialState>({
        initialState,
    });


    return (
        <HomeContext.Provider
            value={{
                ...contextValue,
            }}
        >
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
        </HomeContext.Provider>
    )
}

export default Layout;