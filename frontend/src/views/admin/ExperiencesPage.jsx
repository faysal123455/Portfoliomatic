import Footer from "../../components/footer/Footer";


const ExperiencesPage = () => {
    function generate() {
        // Retrieve form values
        const name1 = document.getElementById("name").value;
        const mail1 = document.getElementById("email").value;
        const phone1 = document.getElementById("phone").value;
        const address1 = document.getElementById("address").value;
        const linkedin1 = document.getElementById("linkedin").value;
        const prof1 = document.getElementById("prof").value;
        const objective1 = document.getElementById("objective").value;
        // Add more variables for other form fields

        if (name1 === "") {
            alert("Please enter your name");
        } else if (mail1 === "") {
            alert("Please enter your email-id");
        } else if (phone1 === "") {
            alert("Please enter your phone no.");
        } else if (address1 === "") {
            alert("Please enter your address");
        } else if (linkedin1 === "") {
            alert("Please enter your LinkedIn id");
        } else if (prof1 === "") {
            alert("Please enter your profession");
        } else if (objective1 === "") {
            alert("Please enter your objectives");
        } else {
            display();
        }

        // Continue with validation for other form fields
    }

    function display() {
        // Extract values from form fields
        const nameValue = document.getElementById("name").value;
        const emailValue = document.getElementById("email").value;
        const phoneValue = document.getElementById("phone").value;
        const addressValue = document.getElementById("address").value;
        const linkedinValue = document.getElementById("linkedin").value;
        const profValue = document.getElementById("prof").value;
        const objectiveValue = document.getElementById("objective").value;
        // Extract values for other form fields

        // Update the HTML elements in the resume template with these values
        document.getElementById("namet").innerHTML = nameValue.toUpperCase();
        document.getElementById("mailt").innerHTML = emailValue;
        document.getElementById("phonet").innerHTML = phoneValue;
        document.getElementById("addresst").innerHTML = addressValue;
        document.getElementById("linkedt").innerHTML = linkedinValue;
        document.getElementById("objectivet").innerHTML = objectiveValue;
        document.getElementById("proft").innerHTML = profValue;
        // Update other resume fields

        // Show the resume template and hide the form
        document.getElementById("resumeform").style.display = "none";
        document.getElementById("resumetemp").style.display = "block";
    }

    function print() {
        document.getElementById("printbtn").style.display = "none";
        document.getElementById("removeLine").style.display = "none";
        document.getElementById("removeLine2").style.display = "none";
        document.getElementById("removeLine3").style.display = "none";
        window.print();
    }


    
    return <div className="container">

        <div className="container w-75" id="resumeform">
            <div>
                <h1 className="text-center mt-2">Resume Generator</h1>
                {/* <p class="text-center">By CM.6</p> */}
                {/* <form > */}
            </div>
            <h3>Personal details</h3>
            {/* Name */}
            <div className="form-group">
                <label htmlFor="name">
                    Your Name <b className="star">*</b>
                </label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    required=""
                    placeholder="Enter Name"
                />
            </div>
            {/* Email */}
            <div className="form-group mt-2">
                <label htmlFor="email">
                    Email<b className="star">*</b>
                </label>
                <input
                    type="text"
                    required=""
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                />
            </div>
            {/* phone */}
            <div className="form-group mt-2">
                <label htmlFor="contact">
                    Your Phone No.<b className="star">*</b>
                </label>
                <input
                    type="number"
                    required=""
                    id="phone"
                    className="form-control"
                    placeholder="Enter Phone no."
                />
            </div>
            {/* address */}
            <div className="form-group mt-2">
                <label htmlFor="address">
                    Your Address<b className="star">*</b>
                </label>
                <textarea
                    name="address"
                    required=""
                    placeholder="Current address here"
                    id="address"
                    className="form-control"
                    defaultValue={""}
                />
            </div>
            <hr />
            <p className="mt-2">Handles Here</p>
            {/* LinkedIn */}
            <div className="form-group mt-2">
                <label htmlFor="linkedin">
                    LinkedIn<b className="star">*</b>
                </label>
                <input
                    name="linkedin"
                    placeholder="Paste the link of your handle"
                    id="linkedin"
                    className="form-control"
                />
            </div>
            <br />
            <hr />
            {/* Second coloumn */}
            <h3>Professional Details</h3>
            {/* objective */}
            <div className="form-group mt-2">
                <label htmlFor="prof">
                    Profession<b className="star">*</b>
                </label>
                <input
                    type="text"
                    required=""
                    id="prof"
                    className="form-control"
                    placeholder="eg. Software Engineer"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="objective">
                    Career objective<b className="star">*</b>
                </label>
                <textarea
                    name="objective"
                    required=""
                    placeholder="Your career objective Here"
                    id="objective"
                    className="form-control"
                    defaultValue={""}
                />
            </div>
            <hr />
            {/* Work Experience */}
            <p>Work Experience</p>
            <div className="form-group mt-2" id="we">
                <label htmlFor="Company">Company</label>
                <input
                    name="company"
                    id="company"
                    placeholder="Company name here"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="role">Role in company</label>
                <input
                    name="role"
                    id="role"
                    placeholder="Role in company"
                    className="form-control"
                />
            </div>
            <hr />
            <p>Qualification</p>
            {/* first */}
            <div className="form-group mt-2">
                <label htmlFor="course">
                    Course<b className="star">*</b>
                </label>
                <input
                    name="course"
                    id="course"
                    placeholder="Course name here"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="comp">
                    Year of Passing<b className="star">*</b>
                </label>
                <input
                    name="comp"
                    id="comp"
                    placeholder="eg. 2020"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="per">
                    Percentage<b className="star">*</b>
                </label>
                <input
                    name="per"
                    id="per"
                    placeholder="eg. 90%"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="university">
                    University/College<b className="star">*</b>
                </label>
                <input
                    name="university"
                    id="university"
                    placeholder="University of Passing"
                    className="form-control"
                />
            </div>
            <hr />
            {/* second */}
            <div className="form-group mt-2" id="we">
                <label htmlFor="course2">Course</label>
                <input
                    name="course2"
                    id="course2"
                    placeholder="Course name here"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="comp2">Year of Passing</label>
                <input
                    name="comp2"
                    id="comp2"
                    placeholder="eg. 2020"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="per2">Percentage</label>
                <input
                    name="per2"
                    id="per2"
                    placeholder="eg. 90%"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="university2">University/College</label>
                <input
                    name="university2"
                    id="university2"
                    placeholder="University of Passing"
                    className="form-control"
                />
            </div>
            <hr />
            {/* third */}
            <div className="form-group mt-2" id="we">
                <label htmlFor="course3">Course</label>
                <input
                    name="course3"
                    id="course3"
                    placeholder="Course name here"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="comp3">Year of Passing</label>
                <input
                    name="comp3"
                    id="comp3"
                    placeholder="eg. 2020"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="comp">Percentage</label>
                <input
                    name="comp"
                    id="per3"
                    placeholder="eg. 90%"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="university3">University/College</label>
                <input
                    name="university3"
                    id="university3"
                    placeholder="University of Passing"
                    className="form-control"
                />
            </div>
            <br />
            <hr />
            <p>Projects</p>
            <div className="form-group mt-2">
                <label htmlFor="project">Project - 1</label>
                <textarea
                    name="project"
                    required=""
                    placeholder="Enter Your project name and few details"
                    id="project"
                    className="form-control"
                    defaultValue={""}
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="project2">Project - 2</label>
                <textarea
                    name="project2"
                    required=""
                    placeholder="Enter Your project name and few details"
                    id="project2"
                    className="form-control"
                    defaultValue={""}
                />
            </div>
            <p>
                (Note - <b className="star">*</b> indicates required fields)
            </p>
            <div className="container text-center">
                <button className="btn btn-primary btn-lg mt-3 mb-5" onClick="generate()">
                    Generate Resume
                </button>
            </div>
        </div>
        {/* </form> */}
        {/* Resume template */}
        <div className="container" id="resumetemp">
            <div className="p-3" id="intro">
                <h2 id="namet" />
                <hr />
                <h5 id="proft" />
                <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-aiming-for-a-goal-or-any-desired-objective-sign-board-business-filled-tal-revivo.png" />
                &nbsp; &nbsp;
                <p id="objectivet" className="d-inline" />
            </div>
            <div className="row p-4" id="contact">
                <div className="col-6">
                    <img src="https://img.icons8.com/material-rounded/24/000000/mail.png" />
                    &nbsp; &nbsp;
                    <p className="d-inline" id="mailt" />
                    <br />
                    <img src="https://img.icons8.com/material-sharp/24/000000/address.png" />
                    &nbsp; &nbsp;
                    <p className="d-inline" id="addresst" />
                </div>
                <div className="col-6">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" />
                    &nbsp; &nbsp;
                    <p className="d-inline" id="phonet" />
                    <br />
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" />
                    &nbsp; &nbsp;
                    <p className="d-inline" id="linkedt" />
                </div>
            </div>
            <div id="page" className="p-3">
                <div>
                    {/* Education */}
                    <p className="point">Education</p>
                    <hr id="removeLine" />
                    <div>
                        <h4 className="d-inline edu" id="courset" />
                        &nbsp; &nbsp;
                        <b id="pert" />
                        <p className="float-end" id="compt" />
                        <p id="universityt" />
                    </div>
                    <div id="course2N">
                        <h4 className="d-inline edu" id="course2t" />
                        &nbsp; &nbsp;
                        <b id="per2t" />
                        <p className="float-end" id="comp2t" />
                        <p id="university2t" />
                    </div>
                    <div id="course3N">
                        <h4 className="d-inline edu" id="course3t" />
                        &nbsp; &nbsp;
                        <b id="per3t" />
                        <p className="float-end" id="comp3t" />
                        <p id="university3t" />
                    </div>
                </div>
                {/* Experience */}
                <div id="expp">
                    <p className="point">Experience</p>
                    <hr id="removeLine2" />
                    <p id="companyt" className="d-inline" />
                    <p id="rolet" className="d-inline" />
                </div>
                {/* Projects */}
                <div id="projj">
                    <p className="point">Projects</p>
                    <hr id="removeLine3" />
                    <p id="projectt" />
                    <p id="project2t" />
                </div>
            </div>
            <div className="container text-center mt-3">
                <button id="printbtn" className="btn btn-danger m-2" onclick="printr()">
                    Print Resume
                </button>
            </div>
        </div>        


        <Footer />

    </div>
}


export default ExperiencesPage;