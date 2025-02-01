import HomeContext from "@/state/index.context";
import { useContext } from "react";

const Faq = () => {
    const {
        state: { hidden_faq },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

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
                            <li id="q001" className="faq-item">
                                <div
                                    className="hidden"
                                    data-collapse-item
                                    data-collapse-item-expanded
                                >
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">What is Munimatrix&quest;</h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-up.svg"
                                            />
                                        </button>
                                    </div>

                                    <div className="mt-4 grid">
                                        <p className="faq-description">
                                            Libero eleifend nec maximus nibh massa etiam&period;
                                            Aliquet et augue sollicitudin litora at&quest; Magnis
                                            cubilia dignissim netus className duis odio mauris&period;
                                            Rutrum neque sociosqu&period;
                                        </p>
                                    </div>
                                </div>

                                <div data-default-item data-collapse-item>
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">What is Munimatrix&quest;</h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-down.svg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li id="q002" className="faq-item">
                                <div
                                    className="hidden"
                                    data-collapse-item
                                    data-collapse-item-expanded
                                >
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Tristique torquent phasellus ut in parturient&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-up.svg"
                                            />
                                        </button>
                                    </div>

                                    <div className="mt-4 grid">
                                        <p className="faq-description">
                                            Libero eleifend nec maximus nibh massa etiam&period;
                                            Aliquet et augue sollicitudin litora at&quest; Magnis
                                            cubilia dignissim netus className duis odio mauris&period;
                                            Rutrum neque sociosqu&period;
                                        </p>
                                    </div>
                                </div>

                                <div data-default-item data-collapse-item>
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Tristique torquent phasellus ut in parturient&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-down.svg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li id="q003" className="faq-item">
                                <div
                                    className="hidden"
                                    data-collapse-item
                                    data-collapse-item-expanded
                                >
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Pellentesque lacus integer&comma; eget rutrum libero
                                            inceptos&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-up.svg"
                                            />
                                        </button>
                                    </div>

                                    <div className="mt-4 grid">
                                        <p className="faq-description">
                                            Libero eleifend nec maximus nibh massa etiam&period;
                                            Aliquet et augue sollicitudin litora at&quest; Magnis
                                            cubilia dignissim netus className duis odio mauris&period;
                                            Rutrum neque sociosqu&period;
                                        </p>
                                    </div>
                                </div>

                                <div data-default-item data-collapse-item>
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Pellentesque lacus integer&comma; eget rutrum libero
                                            inceptos&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-down.svg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li id="q004" className="faq-item">
                                <div
                                    className="hidden"
                                    data-collapse-item
                                    data-collapse-item-expanded
                                >
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Etiam rutrum neque viverra egestas vehicula aliquam&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-up.svg"
                                            />
                                        </button>
                                    </div>

                                    <div className="mt-4 grid">
                                        <p className="faq-description">
                                            Libero eleifend nec maximus nibh massa etiam&period;
                                            Aliquet et augue sollicitudin litora at&quest; Magnis
                                            cubilia dignissim netus className duis odio mauris&period;
                                            Rutrum neque sociosqu&period;
                                        </p>
                                    </div>
                                </div>

                                <div data-default-item data-collapse-item>
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Etiam rutrum neque viverra egestas vehicula aliquam&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-down.svg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li id="q005" className="faq-item">
                                <div
                                    className="hidden"
                                    data-collapse-item
                                    data-collapse-item-expanded
                                >
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Curabitur morbi sagittis per ridiculus amet himenaeos
                                            himenaeos&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-up.svg"
                                            />
                                        </button>
                                    </div>

                                    <div className="mt-4 grid">
                                        <p className="faq-description">
                                            Libero eleifend nec maximus nibh massa etiam&period;
                                            Aliquet et augue sollicitudin litora at&quest; Magnis
                                            cubilia dignissim netus className duis odio mauris&period;
                                            Rutrum neque sociosqu&period;
                                        </p>
                                    </div>
                                </div>

                                <div data-default-item data-collapse-item>
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Curabitur morbi sagittis per ridiculus amet himenaeos
                                            himenaeos&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-down.svg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li id="q006" className="faq-item">
                                <div
                                    className="hidden"
                                    data-collapse-item
                                    data-collapse-item-expanded
                                >
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Mattis in non ad sociosqu litora&period; Placerat vitae
                                            imperdiet est libero ridiculus scelerisque proin&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-up.svg"
                                            />
                                        </button>
                                    </div>

                                    <div className="mt-4 grid">
                                        <p className="faq-description">
                                            Libero eleifend nec maximus nibh massa etiam&period;
                                            Aliquet et augue sollicitudin litora at&quest; Magnis
                                            cubilia dignissim netus className duis odio mauris&period;
                                            Rutrum neque sociosqu&period;
                                        </p>
                                    </div>
                                </div>

                                <div data-default-item data-collapse-item>
                                    <div className="faq-item-header">
                                        <h3 className="text-lg leading-6">
                                            Mattis in non ad sociosqu litora&period; Placerat vitae
                                            imperdiet est libero ridiculus scelerisque proin&quest;
                                        </h3>

                                        <button className="icon-button collapse-button">
                                            <img
                                                className="h-full w-full"
                                                loading="lazy"
                                                alt="Toggle button"
                                                src="/images/arrow--chevron-big-down.svg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;