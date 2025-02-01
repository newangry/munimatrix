import HomeContext from "@/state/index.context";
import { FC, useContext } from "react";
interface Props {
}
const Sidebar:FC<Props> = ({ }) =>  {
    const {
        state: { hidden_sidebar },
        dispatch: homeDispatch,
    } = useContext(HomeContext);
    return (
        <div
            className={`relative h-full overflow-auto z-10 ${hidden_sidebar ? "hidden" : ""}`}
            id="expandedSidebar"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-black opacity-50 transition-opacity"
              aria-hidden="true"
              id="overlay"
            ></div>
            <div className="fixed inset-0 z-10 w-screen h-screen">
              <aside
                className="sidebar absolute h-screen top-0 bottom-0 left-0 w-[280px] pt-1.5 bg-background"
                role="complementary"
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
                    <img
                      className="w-full h-full"
                      alt="Menu"
                      src="/images/menu-icon.svg"
                    />
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

                <nav
                  className="absolute top-[61px] sidebar-expanded w-[280px] h-screen self-stretch flex flex-col items-start justify-start z-[1] text-left text-md shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-background pt-[13px] box-border gap-7"
                  aria-label="Main Navigation"
                >
                  <ul className="p-0 m-0 w-full">
                    <li>
                      <a
                        href="/"
                        className="sidebar-item-expanded selected"
                        aria-current="page"
                      >
                        <img
                          className="h-6 w-6 relative z-[1]"
                          alt="home icon"
                          src="/images/home.svg"
                          aria-hidden="true"
                        />
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="discover.html" className="sidebar-item-expanded">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                          alt="discover icon"
                          src="/images/discover.svg"
                          aria-hidden="true"
                        />
                        <span>Discover</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="sidebar-item-expanded opacity-50 pointer-events-none"
                      >
                        <img
                          className="h-6 w-6 relative z-[1]"
                          alt="companies icon"
                          src="/images/building--business.svg"
                          aria-hidden="true"
                        />
                        <span>Companies</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="sidebar-item-expanded opacity-50 pointer-events-none"
                      >
                        <img
                          className="h-6 w-6 relative z-[1]"
                          alt="saved searches icon"
                          src="/images/basic--heart-outline.svg"
                          aria-hidden="true"
                        />
                        <span>Saved Searches</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="sidebar-item-expanded opacity-50 pointer-events-none"
                      >
                        <img
                          className="h-6 w-6 relative z-[1]"
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
            </div>
          </div>
    )
}

export default Sidebar;