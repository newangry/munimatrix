import { FC } from "react";

interface Props {
    isHiddenModal: boolean,
    setIsHiddenModal: () => void
}
const DetailModal:FC<Props> = ({ isHiddenModal, setIsHiddenModal }) => {

    return (
        <div
            className={`fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] transition-opacity z-10 ${isHiddenModal ? "hidden" : ""}`}
        >
            <div
                className="max-w-event-popup w-full rounded-xl bg-background text-white font-body overflow-hidden"
            > 
                <div
                    className="flex justify-between py-6 pl-10 pr-4 border-b border-solid border-border"
                >
                    <h2 className="font-bold text-xl">Additional Event Details</h2>

                    <button className="bg-transparent close-button"
                        onClick={setIsHiddenModal}
                    >
                        <img
                            className="w-full h-full"
                            loading="lazy"
                            alt="Close popup"
                            src="/images/close-icon.svg"
                        />
                    </button>
                </div>

                <div className="flex pl-10">
                    <ul
                        className="flex flex-col gap-2 pt-6 pr-10 text-md max-w-[300px] w-full"
                    >
                        <li className="event-summary-list-item">
                            <p className="event-summary-list-content font-bold">Municipality</p>
                            <p className="event-summary-list-content">Ausbury Park</p>
                        </li>

                        <li className="event-summary-list-item">
                            <p className="event-summary-list-content font-bold">Municipal Type</p>
                            <p className="event-summary-list-content">City</p>
                        </li>

                        <li className="event-summary-list-item">
                            <p className="event-summary-list-content font-bold">Country</p>
                            <p className="event-summary-list-content">Monmouth</p>
                        </li>

                        <li className="event-summary-list-item">
                            <p className="event-summary-list-content font-bold">State</p>
                            <p className="event-summary-list-content">NJ</p>
                        </li>

                        <li className="event-summary-list-item">
                            <p className="event-summary-list-content font-bold">Population</p>
                            <p className="event-summary-list-content">19329</p>
                        </li>

                        <li className="event-summary-list-item">
                            <p className="event-summary-list-content font-bold">Census Year</p>
                            <p className="event-summary-list-content">2020</p>
                        </li>

                        <li className="event-summary-list-item">
                            <p className="event-summary-list-content font-bold">Organization</p>
                            <p className="event-summary-list-content">Township Council</p>
                        </li>
                    </ul>

                    <div className="event-summary-description flex-1">
                        <p className="leading-[24px] shrink-0">
                            Resolution 24&minus;65 WHEREAS&comma; the Borough of Deal&comma;
                            is looking to utilize a third&minus;party vendor for
                            payroll&comma; and&semi; WHEREAS&comma; the Borough has researched
                            four &lpar;4&rpar; different vendors and received quotes from each
                            vendor&semi; and WHEREAS&comma; the Borough has determined that
                            the best option to utilize is Primepoint&comma; Westampton&comma;
                            NJ&semi; and WHEREAS&comma; the Local Finance Board of the State
                            of New Jersey adopted formal rules regarding &ldquo;Electronic
                            Disbursement Controls for Payroll Purposes&rdquo; in order to
                            provide formal authority for local governments to hire
                            third&minus;party payroll services&sol;disbursing services to
                            disburse funds to payroll agencies&semi; and WHEREAS&comma; in
                            order to have a payroll servicer provide disbursement
                            services&comma; the Board of Commissioners of the Borough of Deal
                            must formally approve the principle of a third&minus;party having
                            access to Borough funds&comma; formally assigning responsibility
                            to an official to oversee the process and approving all
                            contracts&period; NOW&comma; THEREFORE&comma; BE IT
                            ORDAINED&comma; by the Board of Commissioners of the Borough of
                            Deal that Third&minus;Party Payroll Disbursement is hereby.
                            Resolution 24&minus;65 WHEREAS&comma; the Borough of Deal&comma;
                            is looking to utilize a third&minus;party vendor for
                            payroll&comma; and&semi; WHEREAS&comma; the Borough has researched
                            four &lpar;4&rpar; different vendors and received quotes from each
                            vendor&semi; and WHEREAS&comma; the Borough has determined that
                            the best option to utilize is Primepoint&comma; Westampton&comma;
                            NJ&semi; and WHEREAS&comma; the Local Finance Board of the State
                            of New Jersey adopted formal rules regarding &ldquo;Electronic
                            Disbursement Controls for Payroll Purposes&rdquo; in order to
                            provide formal authority for local governments to hire
                            third&minus;party payroll services&sol;disbursing services to
                            disburse funds to payroll agencies&semi; and WHEREAS&comma; in
                            order to have a payroll servicer provide disbursement
                            services&comma; the Board of Commissioners of the Borough of Deal
                            must formally approve the principle of a third&minus;party having
                            access to Borough funds&comma; formally assigning responsibility
                            to an official to oversee the process and approving all
                            contracts&period; NOW&comma; THEREFORE&comma; BE IT
                            ORDAINED&comma; by the Board of Commissioners of the Borough of
                            Deal that Third&minus;Party Payroll Disbursement is hereby
                            ORDAINED&comma; by the Board of Commissioners of the Borough of
                            Deal that Third&minus;Party Payroll Disbursement is hereby.
                            Resolution 24&minus;65 WHEREAS&comma; the Borough of Deal&comma;
                            is looking to utilize a third&minus;party vendor for
                            payroll&comma; and&semi; WHEREAS&comma; the Borough has researched
                            four &lpar;4&rpar; different vendors and received quotes from each
                            vendor&semi; and WHEREAS&comma; the Borough has determined that
                            the best option to utilize is Primepoint&comma; Westampton&comma;
                            NJ&semi; and WHEREAS&comma; the Local Finance Board of the State
                            of New Jersey adopted formal rules regarding &ldquo;Electronic
                            Disbursement Controls for Payroll Purposes&rdquo; in order to
                            provide formal authority for local governments to hire
                            third&minus;party payroll services&sol;disbursing services to
                            disburse funds to payroll agencies&semi; and WHEREAS&comma; in
                            order to have a payroll servicer provide disbursement
                            services&comma; the Board of Commissioners of the Borough of Deal
                            must formally approve the principle of a third&minus;party having
                            access to Borough funds&comma; formally assigning responsibility
                            to an official to oversee the process and approving all
                            contracts&period; NOW&comma; THEREFORE&comma; BE IT
                            ORDAINED&comma; by the Board of Commissioners of the Borough of
                            Deal that Third&minus;Party Payroll Disbursement is hereby
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailModal;