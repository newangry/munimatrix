"use client"
import HomeContext from "@/state/index.context";
import { FC, ReactNode, useContext, useEffect, useState } from "react"
import Search from "./search";
interface Props {
}


const Header: FC<Props> = ({

}) => {

    const [hiddenProfile, setHiddenProfile] = useState(true);
    const {
        state: { hidden_sidebar },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    useEffect(() => {

    }, []);
    return (
        <header
            className="w-full bg-background flex items-center justify-between py-1.5 pr-16 sticky top-0 left-0 z-10 gap-5"
        >
            <div className="flex items-center">
                <button
                    className="mx-5 w-8 h-8 bg-background shrink-0"
                    id="menuToggleBtn"
                    aria-expanded="false"
                    aria-label="Toggle Menu"
                    onClick={() => {
                        homeDispatch({
                            "field": "hidden_sidebar",
                            "value": !hidden_sidebar
                        })
                    }}
                >
                    <img className="w-full h-full" alt="Menu" src="/images/menu-icon.svg" />
                </button>

                <h1 className="w-main-logo h-main-logo shrink-0">
                    <a href="#" aria-label="Munimatrix Logo">
                        <span className="sr-only">Munimatrix</span>
                        <img
                            className="w-full h-full"
                            alt="Munimatrix"
                            src="/images/main-logo.svg"
                        />
                    </a>
                </h1>
            </div>

            <div
                className="relative inline-flex max-w-search-box 2xl:max-w-full gap-2 py-2 px-4 items-center w-full rounded-md border border-solid border-darkslategray focus-within:border-blue-50"
                role="search"
            >
                <img className="h-6 w-6" alt="Search" src="/images/search.svg" />
                <input
                    id="searchInput"
                    className="search-input"
                    placeholder="Search"
                // autocomplete="off"
                />

                <img
                    id="clearIcon"
                    className="h-6 w-6 cursor-pointer hidden"
                    alt="Clear"
                    src="/images/clear.svg"
                />
                <Search />
            </div>

            <div className="flex items-center justify-between gap-10">
                <div className="icon-button"
                    onClick={() => {
                        homeDispatch({
                            "field": "hidden_faq",
                            "value": false
                        })
                    }}
                >
                    <img
                        className="w-full h-full"
                        alt="FAQs"
                        src="/images/faq-icon.svg"
                        id="basicHelpCircleOutline"
                    />
                </div>

                <div className="icon-button">
                    <img
                        className="w-full h-full"
                        alt="Notification"
                        src="/images/notification-icon.svg"
                    />
                </div>

                <div className="relative">
                    <div className="icon-button">
                        <img
                            className="w-full h-full"
                            alt="Show Profile"
                            src="/images/user-icon.svg"
                            onClick={() => {
                                setHiddenProfile(p => !p);
                            }}
                        />
                    </div>
                    <div
                        id="profilePopup"
                        className={`absolute top-12 right-0 profile-popup ${hiddenProfile ? "hidden" : ""}`}
                        role="menu"
                    >
                        <h2 className="mb-5 font-bold text-sm opacity-50 leading-3 uppercase">
                            profile
                        </h2>
                        <p className="mb-1 break-words font-bold text-md">Jason Silberman</p>
                        <address className="break-words text-md not-italic">
                            <a
                                href="mailto:jason.silberman@email.com"
                                className="text-white no-underline"
                            >jason.silberman@email.com</a>
                        </address>
                        <button
                            id="btnLogout"
                            className="logout-button"
                            aria-label="Log out of your account"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;