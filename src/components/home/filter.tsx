
const Filter = () => {
    return (
        <div
            className="max-w-full mb-[18px] flex flex-col items-start justify-start gap-[7px]"
        >
            <div
                className="flex items-center py-[0px] pl-[0px] pr-[20px] box-border gap-[4px] max-w-full mq390:flex-wrap"
            >
                <button className="tab-item selected">
                    <a
                        className="[text-decoration:none] h-[19px] relative font-bold text-[inherit] inline-block leading-5"
                    >Ausbury Park
                    </a>
                    <span className="tab-close-button"
                    >
                        <img
                            className="w-full h-full"
                            src="images/close-icon.svg"
                            alt="Close tab"
                        />
                    </span>
                </button>
                <button className="tab-item">
                    <a
                        className="[text-decoration:none] self-stretch h-[19px] relative font-bold text-[inherit] inline-block shrink-0 mq450:text-base"
                    >
                        Bergen
                    </a>
                    <span className="tab-close-button hidden"
                    >
                        <img
                            className="w-full h-full"
                            src="images/close-icon.svg"
                            alt="Close tab"
                        />
                    </span>
                </button>

                <button className="shrink-0 p-2 w-9 h-9 icon-button">
                    <img
                        className="w-full h-full"
                        loading="lazy"
                        alt="Cool Icon"
                        src="images/coolicon.svg"
                    />
                </button>
            </div>
        </div>
    )
}

export default Filter;