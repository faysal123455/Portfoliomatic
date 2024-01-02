import "./Language.css"

const Language = () => {



    return (
        <>

            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>language</h3>
                </div>
                <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-d">
                        <div data-repeater-item="">
                            <div className="cv-form-row cv-form-row-experience">
                                <div className="cols-3">
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Language Name
                                        </label>
                                        <input
                                            name="proj_title"
                                            type="text"
                                            className="form-control proj_title"
                                            id=""
                                            onkeyup="generateCV()"
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Level
                                        </label>
                                        <input
                                            name="proj_link"
                                            type="text"
                                            className="form-control proj_link"
                                            id=""
                                            onkeyup="generateCV()"
                                        />
                                        <span className="form-text" />
                                    </div>
                                </div>
                                <button
                                    data-repeater-delete=""
                                    type="button"
                                    className="repeater-remove-btn"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        data-repeater-create=""
                        value="Add"
                        className="repeater-add-btn"
                    >
                        +
                    </button>
                </div>
            </div> 


        </>
    )


}


export default Language;