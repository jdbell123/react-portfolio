import React from "react";

function ContactSection() {

    let nameInput = React.createRef()
    let subjectInput = React.createRef()
    let messageInput = React.createRef()

    // Open Email Client to send email
    function submitButtonClicked(e) {
        e.preventDefault();

        const mailtoEmail = 'jdbell123@gmail.com';
        nameInput = nameInput.current.value;
        subjectInput = subjectInput.current.value;
        messageInput = messageInput.current.value;

        window.open(`mailto:${mailtoEmail}?subject=${subjectInput}&body=${messageInput}`);
    }


    return (
        <div className="row pt-3 fs-5 border border-secondary p-3 mt-3" id="display-section">
            <header className="row">
                <div className="col-md-12">
                    <h1 className=" py-3 border-bottom border-2 fw-bold fs-2">Contact</h1>
                </div>
            </header>
            <form enctype="text/plain" className="mb-3" >
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input ref={nameInput} type="text" className="form-control" id="nameInput" placeholder="Name..." name="subject" />
                </div>
                <label for="subject" class="form-label">Subject</label>
                <input ref={subjectInput} type="text" class="form-control mb-3" id="subjectInput" placeholder="Subject..." name="subject"></input>
                <div className="mb-3">
                    <label htmlFor="messageText" className="form-label">Message</label>
                    <textarea ref={messageInput} className="form-control" id="messageInput" placeholder="Message..." name="body" rows="3"></textarea>
                </div>
                <div className="text-center">
                    <button onClick={submitButtonClicked} type="submit" className="btn btn-secondary btn-lg" id="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ContactSection;