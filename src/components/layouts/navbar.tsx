"use client"
import { FC, ReactNode, useState } from "react"
import Sidebar from "./sidebar";
interface Props {
}


const Navbar: FC<Props> = ({ }) => {
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
                            <li>
                                <a href="#" className="sidebar-item selected" aria-current="page">
                                    <img
                                        className="w-6 h-6"
                                        alt="home icon"
                                        src="/images/home.svg"
                                        aria-hidden="true"
                                    />
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="sidebar-item">
                                    <img
                                        className="w-6 h-6 relative overflow-hidden shrink-0"
                                        alt="discover icon"
                                        src="/images/discover.svg"
                                        aria-hidden="true"
                                    />
                                    <span>Discover</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/companies"
                                    className="sidebar-item opacity-50 pointer-events-none"
                                >
                                    <img
                                        className="w-6 h-6"
                                        alt="companies icon"
                                        src="/images/building--business.svg"
                                        aria-hidden="true"
                                    />
                                    <span>Companies</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/saved-searches"
                                    className="sidebar-item opacity-50 pointer-events-none"
                                >
                                    <img
                                        className="w-6 h-6"
                                        alt="saved searches icon"
                                        src="/images/basic--heart-outline.svg"
                                        aria-hidden="true"
                                    />
                                    <span className="text-center">Saved Searches</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contacts"
                                    className="sidebar-item opacity-50 pointer-events-none"
                                >
                                    <img
                                        className="w-6 h-6"
                                        alt="contacts icon"
                                        src="/images/user--group.svg"
                                        aria-hidden="true"
                                    />
                                    <span>Contacts</span>
                                </a>
                            </li>
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