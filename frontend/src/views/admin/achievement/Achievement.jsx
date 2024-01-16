import "./Achievement.css"


const Achievement = () => {

    const [achievementSections, setAchievementSections] = useState([{ id: 1 }]);



    const addAchievementSection = () => {
        const newSection = { id: achievementSections.length + 1 };
        setAchievementSections([...achievementSections, newSection]);
    };
    const removeAchievementSection = (id) => {
        const updatedSections = achievementSections.filter((section) => section.id !== id);
        setAchievementSections(updatedSections);
    };








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
            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>achievement</h3>
                </div>
                <form>
                    {achievementSections.map((section) => (
                        <div className="repeater" data-repeater-list="group-d" key={section.id}>
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-achievement">
                                    <div className="cols-2">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                name="achieve_title"
                                                type="text"
                                                className="form-control achieve_title"
                                                id=""
                                                placeholder="e.g. johndoe@gmail.com"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Recoginition
                                            </label>
                                            <input
                                                name="achieve_description"
                                                type="text"
                                                className="form-control achieve_description"
                                                id=""
                                                placeholder="e.g. johndoe@gmail.com"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <button
                                            data-repeater-delete=""
                                            type="button"
                                            className="repeater-remove-btn"
                                            onClick={() => removeAchievementSection(section.id)}
                                        >
                                            -
                                        </button>




                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    <button
                        type="button"
                        data-repeater-create=""
                        value="Add"
                        className="repeater-add-btn"
                        onClick={addAchievementSection}
                    >
                        +
                    </button>

                    <div className="form-item">
                        <button type="submit" className="send-button">Send</button>

                    </div>
                </form>
            </div>
        </>
    )

}

export default Achievement;