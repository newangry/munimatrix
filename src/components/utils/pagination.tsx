import PageCount from "../home/page_count";

const Pagination = () => {
    return (
        <nav
            className="grid grid-cols-3 gap-10 text-white px-5 mt-4 items-center my-0 mx-auto"
            aria-label="Navigation to other pages"
            id="paginationWrapper"
        >
            <ul
                className="col-start-2 flex items-center justify-center h-9 py-2 px-2.5 box-border gap-2.5"
                id="paginationContainer"
            >
                <li>
                    <a
                        className="pagination-arrow"
                        aria-label="Go to previous page"
                        href="#"
                    >
                        <img
                            src="/images/chevron-left.svg"
                            alt="chevron left icon"
                            aria-hidden="true"
                            className="w-full h-full"
                        />
                    </a>
                </li>
                <li>
                    <a className="pagination-number" href="#">1</a>
                </li>
                <li>
                    <a className="pagination-number" href="#">2</a>
                </li>
                <li>
                    <a className="pagination-number" href="#">3</a>
                </li>
                <li>
                    <a className="pagination-number" href="#">4</a>
                </li>
                <li>
                    <a className="pagination-number" href="#">5</a>
                </li>
                <li>
                    <a className="pagination-number" href="#">6</a>
                </li>
                <li>
                    <a className="pagination-number" href="#">7</a>
                </li>
                <li>
                    <a className="pagination-number" href="#">8</a>
                </li>

                <li>
                    <a
                        className="pagination-arrow"
                        aria-label="Go to next page"
                        href="#"
                    >
                        <img
                            src="/images/chevron-left.svg"
                            alt="chevron right icon"
                            aria-hidden="true"
                            className="w-full h-full rotate-180"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;