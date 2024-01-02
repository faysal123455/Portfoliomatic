import "./Education.css"

const Education = () => {



    return (
        <>

            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>education</h3>
                </div>
                <div className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-c">
                        <div data-repeater-item="">
                            <div className="cv-form-row cv-form-row-experience">
                                <div className="cols-3">
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            School
                                        </label>
                                        <input
                                            name="edu_school"
                                            type="text"
                                            className="form-control edu_school"
                                            id=""
                                            onkeyup="generateCV()"
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Degree
                                        </label>
                                        <input
                                            name="edu_degree"
                                            type="text"
                                            className="form-control edu_degree"
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
                                            name="edu_start_date"
                                            type="date"
                                            className="form-control edu_start_date"
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
                                            name="edu_graduation_date"
                                            type="date"
                                            className="form-control edu_graduation_date"
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
                                            name="edu_description"
                                            type="text"
                                            className="form-control edu_description"
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


export default Education;
