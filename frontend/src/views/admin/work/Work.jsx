import "./Work.css"

const Work = () => {



    return (
        <>


            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>work experience</h3>
                </div>
                <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-b">
                        <div data-repeater-item="">
                            <div className="cv-form-row cv-form-row-experience">
                                <div className="cols-3">
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            name="exp_title"
                                            type="text"
                                            className="form-control exp_title"
                                            id=""
                                            onkeyup="generateCV()"
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Company / Organization
                                        </label>
                                        <input
                                            name="exp_organization"
                                            type="text"
                                            className="form-control exp_organization"
                                            id=""
                                            onkeyup="generateCV()"
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Country
                                        </label>
                                        <select name='country' className="form-control" onChange={(e) => handlecountry(e)}>
                                            <option value=""></option>
                                            {
                                                countrydata.map((getcountry, index) => (
                                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                                ))
                                            }

                                        </select>

                                        <span className="form-text" />
                                    </div>





                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            City
                                        </label>
                                        <select name='city' className="form-control" onChange={(e) => handlestate(e)}>
                                            <option value=""></option>
                                            {
                                                state.map((getstate, index) => (
                                                    <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                                ))
                                            }

                                        </select>

                                        <span className="form-text" />
                                    </div>
                                </div>
                                <div className="cols-3">
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Start Date
                                        </label>
                                        <input
                                            name="exp_start_date"
                                            type="date"
                                            className="form-control exp_start_date"
                                            id=""
                                            onkeyup="generateCV()"
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            End Date
                                        </label>
                                        <input
                                            name="exp_end_date"
                                            type="date"
                                            className="form-control exp_end_date"
                                            id=""
                                            onkeyup="generateCV()"
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Description
                                        </label>
                                        <input
                                            name="exp_description"
                                            type="text"
                                            className="form-control exp_description"
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


export default Work;