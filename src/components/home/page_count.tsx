"use client"
import { useEffect, useState } from "react";

const PageCount = () => {
    const counts = ["20", "50", "All"];
    const [hiddenSelector, setHiddenSelector] = useState<boolean>(true);
    const [pageCount, setPageCount] = useState<string>("20");

    return (
        <div className="flex items-center gap-4" id="paginationDropdown">
            <p className="range leading-[24px] text-md">1 - 20 of 245</p>
            <div className="relative inline-block text-left dropdown">
                <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-button w-[57px] flex items-center justify-center rounded h-8 text-gray-400"
                    onClick={() => {
                        setHiddenSelector(p => !p);
                    }}
                >
                    <span className="selected-value text-md leading-[24px]"
                    >
                        { pageCount }
                    </span >
                    <img
                        className="w-6 h-6"
                        alt="Expand dropdown"
                        src="/images/arrow--chevron-down.svg"
                    />
                </button>

                <div
                    className={`dropdown-menu z-10 w-[57px] absolute bg-white divide-y divide-gray-100 rounded shadow ${hiddenSelector ? "hidden" : ""}`}
                    role="menu"
                >
                    <ul
                        className="px-[5px] py-2 text-md font-body text-gray-400 flex flex-col gap-2"
                        role="menu"
                    >
                        {
                            counts.map((item, index) =>
                                <li role="menuitem" key={`page-count-${item}`}>
                                    <button
                                        type="button"
                                        className="w-full text-left px-2 py-1 bg-transparent hover:bg-blue-50 rounded hover:text-white"
                                        onClick={() => {
                                            setPageCount(item);
                                            setHiddenSelector( true );
                                        }}
                                    >
                                        {item}
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PageCount;