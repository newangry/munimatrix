"use client"
import { FC, ReactNode, useState } from "react"
import Sidebar from "./sidebar";
import { MENU } from "@/utils/consts";
import { usePathname } from "next/navigation";
interface Props {
}


const Navbar: FC<Props> = ({ }) => {
    const pathname = usePathname();

    return (
        <div
            className="w-[70px] h-full bg-background flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-2xs text-white font-body"
        >
            <div className="sidebar-container">
                <aside
                    className="w-[70px] h-full overflow-auto"
                    aria-label="Sidebar Navigation"
                >
                    <nav
                        className="sidebar m-0 w-full flex flex-col items-start justify-start text-left text-xs text-white"
                        aria-label="Main Navigation"
                    >
                        <ul className="p-0 m-0 w-full">
                            {
                                MENU.map((page, index) =>
                                    <li key={`navbar-${index}`}>
                                        <a
                                            href={page.path}
                                            className={`sidebar-item ${page.enable ? "" : "opacity-50 pointer-events-none"} ${pathname == page.path ? "selected" : ""}`}
                                        >
                                            <img
                                                className="w-6 h-6"
                                                alt="contacts icon"
                                                src={`/images/${page.icon}`}
                                                aria-hidden="true"
                                            />
                                            <span className="text-center">{ page.name }</span>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </aside>
                <Sidebar
                />
            </div>
        </div>
    )
}

export default Navbar;