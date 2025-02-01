import { INFORMATION_DATA } from "@/utils/consts";
import { useState } from "react";
const Information = () => {
    const [informationData, setInformationData] = useState(INFORMATION_DATA);
    const [collapsedIndex, setCollapsedIndex] = useState(0);
    
    return (
        <aside
            className="max-w-event-summary w-full overflow-y-auto bg-background max-h-[852px] flex flex-col text-base text-green font-body p-7"
            aria-label="Updated Sidebar"
        >

            <div
                className="text-white border-border border-b-[1px] border-solid pb-4"
            >
                <h2 className="mb-3 text-xl font-bold leading-5">{informationData.name}</h2>

                <time dateTime="2024-09-01" className="text-md leading-6">
                    {
                        INFORMATION_DATA.since
                    }
                </time>
            </div>

            <ul className="overflow-y-auto" aria-label="Financial Categories">
                {
                    INFORMATION_DATA.data.map((item: any, index) =>
                        <li key={`information-item-${index}`} className="divider-vertical accordion-container">
                            <div className="accordion-wrapper">
                                <div className="accordion-item-content">
                                    <h2 className="accordion-title">{item.title}</h2>
                                    <data value="200,000.00" className="accordion-amount"
                                    >{item.amount}</data>
                                </div>

                                <button
                                    aria-expanded="false"
                                    aria-controls="contracts-content"
                                    className="summary-collapse-button"
                                    onClick={() => {
                                        setCollapsedIndex(index)
                                    }}
                                >
                                    <img
                                        className="w-full h-full"
                                        alt="Toggle contracts details"
                                        src={`/images/arrow--chevron-big-${collapsedIndex == index ? "up":"down"}.svg`}
                                    />
                                </button>
                            </div>

                            <div className={`expanded-accordion ${collapsedIndex == index ? "" : "hidden"}`} role="region">
                                <ul className="py-0 pl-1.5">
                                    {
                                        item.data.map((sub_item: any, sub_index: number) =>
                                            <li className="accordion-item" key={`information-sub-item-${sub_index}`}>
                                                <div className="w-full text-white flex-1 min-w-36">
                                                    <h3 className="accordion-title">{ sub_item.title }</h3>
                                                    <div className="flex w-full items-center text-md">
                                                        <data value="237000.00" className="accordion-data"
                                                        >{ sub_item.amount }</data>
                                                        <span className="divider-horizontal"></span>
                                                        <time dateTime="2024-09-17" className="accordion-data">
                                                            { sub_item.date }
                                                        </time>
                                                    </div>
                                                </div>
                                                <button className="view-source-button">View Source</button>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}

export default Information;