import './Contact.scss';

export const Contact = () => (
  <div className="contact">
    <h1>
      <span>Contact Page</span>
    </h1>
    <div className="container inputs">
      <ul className="contact-list">
        <h2> My Info</h2>
        <li>Brennan M. Heley</li>
        <li>
          <a href="mailto: dev.mail.bag@gmail.com">dev.mail.bag@gmail.com</a>
        </li>
        <li>612-250-4688</li>
        <li>OR if youd rather, submit your info and I will get back to you as soon as possible.</li>
      </ul>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <input type="text" name="message" />
        </label>
        <button type="submit" name="submitButton" className="btn-success btn-lg">
          Submit
        </button>
      </form>
    </div>
  </div>
);
