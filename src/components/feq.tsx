import HomeContext from "@/state/index.context";
import { FAQ_DATA } from "@/utils/consts";
import { useContext, useState } from "react";

const Faq = () => {
    const {
        state: { hidden_faq },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div
            id="faqsPopup"
            className={`fixed inset-0 flex flex-col h-screen justify-center align-center bg-background z-10 ${hidden_faq ? "hidden" : ""}`}
        >
            <div className="py-16 text-center justify-center overflow-auto">
                <button className="fixed top-10 right-10 icon-button close-button"
                    onClick={() => {
                        homeDispatch({
                            "field": "hidden_faq",
                            "value": !hidden_faq
                        })
                    }}
                >
                    <img
                        className="w-full h-full"
                        loading="lazy"
                        alt="Close FAQs"
                        src="/images/close-icon.svg"
                    />
                </button>

                <h2 className="text-center font-body text-white text-2xl">
                    Frequently Asked Questions
                </h2>

                <div
                    className="flex flex-col justify-center pt-4 px-4 bg-background text-center font-body"
                >
                    <p className="mb-8 self-stretch text-md leading-6 text-white">
                        These are the most commonly asked questions about Munimatrix&period;
                    </p>
                    <div className="flex justify-center text-left text-white">
                        <ul
                            className="flex flex-col items-start justify-start max-w-faq-list w-full p-0"
                        >
                            {
                                FAQ_DATA.map((item, index) =>
                                    <li key={`faq-item-${index}`} className="faq-item">
                                        <div
                                            className={selectedIndex == index ? "" : "hidden"}
                                            data-collapse-item
                                            data-collapse-item-expanded
                                        >
                                            <div className="faq-item-header">
                                                <h3 className="text-lg leading-6"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.title
                                                    }}
                                                ></h3>

                                                <button className="icon-button collapse-button"
                                                    onClick={() => {
                                                        setSelectedIndex(-1);
                                                    }}
                                                >
                                                    <img
                                                        className="h-full w-full"
                                                        loading="lazy"
                                                        alt="Toggle button"
                                                        src="/images/arrow--chevron-big-up.svg"
                                                    />
                                                </button>
                                            </div>

                                            <div className="mt-4 grid">
                                                <p className="faq-description"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.content
                                                    }}
                                                >
                                                </p>
                                            </div>
                                        </div>
                                        {
                                            selectedIndex != index &&
                                            <div data-default-item data-collapse-item>
                                                <div className="faq-item-header">
                                                    <h3 className="text-lg leading-6"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.title
                                                        }}
                                                    ></h3>
                                                    <button className="icon-button collapse-button"
                                                        onClick={() => {
                                                            setSelectedIndex(index)
                                                        }}
                                                    >
                                                        <img
                                                            className="h-full w-full"
                                                            loading="lazy"
                                                            alt="Toggle button"
                                                            src="/images/arrow--chevron-big-down.svg"
                                                        />
                                                    </button>

                                                </div>
                                            </div>
                                        }

                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;