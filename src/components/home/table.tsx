import { TABLE_DATA } from "@/utils/consts";
import { useState } from "react";
import FilterTable from "./filter_table";
import Information from "./information";
import Pagination from "../utils/pagination";
import DetailModal from "./detail_modal";

const Table = () => {
    const [tableData, setTableData] = useState(TABLE_DATA);
    const [hiddenDetailModal, setHiddenDetailModal] = useState(true);

    return <div className="gap-[15px] flex justify-between overflow-hidden">
        <div
            className="bg-background gap-[10px] w-full max-w-full max-h-[852px] leading-[normal] tracking-[normal] text-center text-xs text-white font-body py-5"
        >
            <FilterTable />
            <section
                className="w-full max-h-[725px] overflow-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border"
                aria-label="Transactions"
            >
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 left-0">
                        <tr
                            className="bg-background border-b border-border border-solid h-[42px] w-full"
                        >
                            <th scope="col" className="table-heading">date</th>
                            <th scope="col" className="table-heading">primary type</th>
                            <th scope="col" className="table-heading">subtype</th>
                            <th scope="col" className="table-heading">event type</th>
                            <th scope="col" className="table-heading">event subtype</th>
                            <th scope="col" className="table-heading">company</th>
                            <th scope="col" className="table-heading text-right">amount</th>
                        </tr>
                    </thead>

                    <tbody id="table-body" className="table-with-data">
                        {
                            tableData.map((item, index) =>
                                <tr id="e001" className="table-row" key={`table-data-item=${index}`}
                                    onClick={() => {
                                        setHiddenDetailModal(false);
                                    }}
                                >
                                    <td className="table-row-item">{item.date}</td>
                                    <td className="table-row-item">{item.primary_type}</td>
                                    <td className="table-row-item">{item.subtype}</td>
                                    <td className="table-row-item">
                                        {item.event_type}
                                    </td>
                                    <td className="table-row-item">{item.event_subtype}</td>
                                    <td className="table-row-item">
                                        <a href="#" className="table-item-link text-blue-50">
                                            {item.company}
                                        </a>
                                    </td>
                                    <td className="table-row-item text-green font-bold text-right">
                                        {item.amount}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
            <Pagination />
        </div>
        <Information />
        <DetailModal 
            isHiddenModal={hiddenDetailModal}
            setIsHiddenModal={() => {
                setHiddenDetailModal(p => !p)
            }}
        />
    </div>
}

export default Table;