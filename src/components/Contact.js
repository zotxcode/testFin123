import React from "react";

function Contact() {
  return (
    <div className="my-5">
      <h2 className="display-5 font-weight-bold text-blue text-center py-4">
        Contact Us
      </h2>
      <div className="d-md-flex justify-content-center align-content-center">
        <div className="w-md-50 p-4 shadow rounded">
          <div className="form-group">
            <label className="text-blue" htmlFor="contact-name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="contact-name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label className="text-blue" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="Email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label className="text-blue" htmlFor="subject">
              Subject
            </label>
            <select
              id="subject"
              className="form-control"
              defaultValue={"0"}
            >
              <option value="0" disabled>
                Please select your subject
              </option>
              <option value="1">Bugs</option>
              <option value="2">Questions</option>
              <option value="3">Info</option>
            </select>
          </div>
          <div className="form-group">
            <label className="text-blue" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              rows="5"
              cols="5"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div className="text-right">
            <button className="btn btn-save">Save</button>
          </div>
        </div>
        <div className="w-md-50 align-self-center">
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.047723411956!2d101.66802891416222!3d3.0819372977557298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a50334715bb%3A0x9818a8931d3e4f67!2sJalan%20Awan%20Hijau%2C%20Taman%20Overseas%20Union%2C%2058200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sid!4v1599908695807!5m2!1sen!2sid"
            height="450"
            className="w-100"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden={false}
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
