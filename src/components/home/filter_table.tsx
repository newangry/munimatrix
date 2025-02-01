import { useState } from "react";
import PageCount from "./page_count";

const FilterTable = () => {
    
    const [hiddenFilter, setHiddenFilter] = useState<boolean>(true);
    const [hiddenPageCount, setHIddenPageCount] = useState<boolean>(true);

    return (
        <div
            className="flex justify-between text-white px-5 pb-[10px] border-border border-b-[1px] border-solid box-border"
        >
            <div className="relative w-full flex-1">
                <div className="flex w-[66px] h-[27px] font-body cursor-pointer"
                    onClick={() => {
                        setHiddenFilter(p => !p)
                    }}
                >
                    <img
                        className="w-6 h-6"
                        loading="lazy"
                        alt=""
                        src="/images/system--filter-outline.svg"
                    />

                    <b className="leading-6">Filter</b>
                </div>
                <aside
                    className={`absolute z-[9] top-10 w-[486px] shadow-xl rounded bg-background border-border border-[2px] border-solid box-border max-w-full ${hiddenFilter ? "hidden" : ""}`}
                    role="complementary"
                    aria-label="Filter Options"
                    id="filterPopup"
                >
                    <div
                        className="flex justify-between items-center px-6 pt-[14px] pb-3 text-white font-body border-border border-b-[1px] border-solid box-border"
                    >
                        <h3 className="text-lg font-bold">Filter by</h3>

                        <button
                            className="text-blue-50 underline bg-transparent cursor-pointer leading-6 hover:opacity-80 transition-opacity"
                            aria-label="Clear all filters"
                            type="button"
                        >
                            Clear all
                        </button>
                    </div>

                    <form
                        className="flex flex-row items-start justify-start flex-wrap content-start max-w-full text-left text-base text-white font-body"
                        aria-label="Filter Form"
                    >
                        <fieldset className="primary-type">
                            <legend
                                className="leading-6 font-bold opacity-60 text-md py-[10px] px-5"
                            >
                                Primary Type
                            </legend>
                            <ul
                                className="self-stretch flex flex-col items-start justify-start text-white list-none m-0"
                                role="list"
                                aria-label="Primary Type Options"
                            >
                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-contract-award"
                                                name="primary-type"
                                                value="contract-award"
                                                aria-label="Contract Award filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Contract Award
                                    </label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-debt-issuance"
                                                name="primary-type"
                                                value="debt-issuance"
                                                aria-label="Debt Issuance filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >
                                        Debt Issuance
                                    </label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-grant-procurement"
                                                name="primary-type"
                                                value="grant-procurement"
                                                aria-label="Grant Procurement filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Grant Procurement</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-labor"
                                                name="primary-type"
                                                value="labor"
                                                aria-label="Labor filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label className="cursor-pointer flex-1"
                                    >Labor</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-land-acquisition"
                                                name="primary-type"
                                                value="land-acquisition"
                                                aria-label="Land Acquisition filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Land Acquisition</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-legal"
                                                name="primary-type"
                                                value="legal"
                                                aria-label="Legal filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label className="cursor-pointer flex-1"
                                    >Legal</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-liquor"
                                                name="primary-type"
                                                value="liquor"
                                                aria-label="Liquor filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label className="cursor-pointer flex-1"
                                    >Liquor</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="type-liquor-acquisition"
                                                name="primary-type"
                                                value="liquor-acquisition"
                                                aria-label="Liquor Acquisition filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Liquor Acquisition</label>
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset className="sub-type">
                            <div>
                                <legend
                                    className="leading-6 font-bold opacity-60 text-md py-[10px] px-6"
                                >
                                    Sub Type
                                </legend>
                            </div>

                            <h2 className="text-md font-bold leading-6 py-[8px] px-6">
                                Contract Award
                            </h2>
                            <ul
                                className="self-stretch flex flex-col items-start justify-start text-white list-none m-0"
                                role="list"
                                aria-label="Sub Type Options"
                            >
                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-services"
                                                name="sub-type"
                                                value="services"
                                                aria-label="Services sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Services</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-debt-issuance"
                                                name="sub-type"
                                                value="debt-issuance"
                                                aria-label="Debt Issuance sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >
                                        Debt Issuance</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-township"
                                                name="sub-type"
                                                value="township"
                                                aria-label="Township sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Township</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-atlantic"
                                                name="sub-type"
                                                value="atlantic"
                                                aria-label="Atlantic sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label className="cursor-pointer flex-1"
                                    >
                                        Atlantic</label>
                                </li>
                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-caldwell"
                                                name="sub-type"
                                                value="caldwell"
                                                aria-label="Caldwell sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Caldwell</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-debt-camden"
                                                name="sub-type"
                                                value="debt-camden"
                                                aria-label="Debt Camden sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >
                                        Debt Camden</label>
                                </li>
                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-mercer"
                                                name="sub-type"
                                                value="mercer"
                                                aria-label="Mercer sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >Mercer</label>
                                </li>

                                <li className="filter-item">
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer checkbox"
                                                id="subtype-debt-essex"
                                                name="sub-type"
                                                value="debt-essex"
                                                aria-label="Debt Essex sub-type filter"
                                            />
                                            <span className="check-mark" aria-hidden="true">
                                                <img
                                                    src="/images/check-mark.svg"
                                                    alt=""
                                                    className="w-4 h-4 text-white"
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        className="cursor-pointer flex-1"
                                    >
                                        Debt Essex</label>
                                </li>
                            </ul>
                        </fieldset>

                        <footer
                            className="w-full flex justify-end px-6 py-[17px] border-border border-t-[1px] border-solid box-border"
                        >
                            <button
                                type="submit"
                                className="cursor-pointer w-[140px] h-[44px] text-lg bg-blue-50 rounded flex items-center justify-center text-white font-bold hover:bg-steelblue-300 transition-opacity"
                            >
                                Apply
                            </button>
                        </footer>
                    </form>
                </aside>
            </div>

            <PageCount />
        </div>
    )
}

export default FilterTable;