import "./Achievement.css"


const Archivment = () => {



    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("cv_id", cv.id);
        console.log(formData)
        createCv(formData);



        console.log(formData);
}




    return (
        <>
            <section id="about-sc">
                <div className="container">
                    <div className="about-cnt">
                        <form onSubmit={handleSubmit} className="cv-form" id="cv-form">


                            <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>achievements</h3>
                                </div>
                                <div className="row-separator repeater">
                                    <div className="repeater" data-repeater-list="group-a">
                                        <div data-repeater-item="">
                                            <div className="cv-form-row cv-form-row-achievement">
                                                <div className="cols-2">
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Title
                                                        </label>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            className="form-control achieve_title"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                            placeholder="Excellence in Leadership Award"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Description
                                                        </label>
                                                        <input
                                                            name="recognitation"
                                                            type="text"
                                                            className="form-control achieve_description"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                            placeholder="Employee of the Month"
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
                                </div>

                            </div>


                            <input type="submit" />

                        </form>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Archivment;