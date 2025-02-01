import { useState } from "react";

const Search = () => {
    
    const [hiddenDropDwon, setHiddenDropDown] = useState(true);
    return (
        <div
            className="relative inline-flex max-w-search-box 2xl:max-w-full gap-2 py-2 px-4 items-center w-full rounded-md border border-solid border-darkslategray focus-within:border-blue-50"
            role="search"
        >
            <img className="h-6 w-6" alt="Search" src="/images/search.svg" />
            <input
                id="searchInput"
                className="search-input"
                placeholder="Search"
                autoComplete="off"
                onChange={(e) => {
                    if(e.target.value != "") {
                        setHiddenDropDown(false);
                    } else {
                        setHiddenDropDown(true);
                    }
                }}
            />

            <img
                id="clearIcon"
                className={`h-6 w-6 cursor-pointer ${hiddenDropDwon ? "hidden" : ""}`}
                alt="Clear"
                src="/images/clear.svg"
                onClick={() => {
                    setHiddenDropDown(true);
                }}
            />
            <div
                id="searchSuggestions"
                className={`${hiddenDropDwon ? "hidden" : ""} absolute max-h-[323px] overflow-y-scroll [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border w-full top-10 left-0 shadow-lg rounded bg-background border-border border-[2px] border-solid box-border py-4 font-body`}
            >
                <section
                    className="border-b border-solid border-border box-border w-full self-stretch"
                    aria-labelledby="municipality-heading"
                >
                    <h2
                        id="municipality-heading"
                        className="px-[30px] mb-[10px] uppercase text-white text-sm font-bold opacity-[0.5]"
                    >
                        municipality
                    </h2>
                    <ul
                        className="flex flex-col items-start justify-start text-left text-sm text-white"
                        role="listbox"
                        aria-label="Municipality suggestions"
                    >
                        <li className="suggestion-item" role="option" id="r001">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>

                        <li className="suggestion-item" role="option">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>

                        <li className="suggestion-item" role="option">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>

                        <li className="suggestion-item" role="option">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>
                    </ul>
                </section>

                <section
                    className="max-w-full self-stretch"
                    aria-labelledby="company-heading"
                >
                    <h2
                        id="company-heading"
                        className="px-[30px] mb-[10px] uppercase text-white text-sm font-bold opacity-[0.5] pt-4"
                    >
                        company
                    </h2>
                    <ul
                        className="flex flex-col items-start justify-start text-left text-sm text-white"
                        role="listbox"
                        aria-label="Company suggestions"
                    >
                        <li className="suggestion-item" role="option">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>

                        <li className="suggestion-item" role="option">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>

                        <li className="suggestion-item" role="option">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>

                        <li className="suggestion-item" role="option">
                            <div className="leading-6 text-md">
                                <strong>Ausbury</strong>
                                <span>(Dubeque County), IA</span>
                            </div>
                            <button
                                type="button"
                                className="add-to-home"
                                aria-label="Add Ausbury to home"
                            >
                                <img
                                    className="h-4 w-4"
                                    loading="lazy"
                                    alt=""
                                    src="/images/plus.svg"
                                    aria-hidden="true"
                                />
                                <span className="text-xs">Add to Home</span>
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Search;