import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeName(event) {
    return this.setState({ name: event.target.value });
  }

  changeEmail(event) {
    return this.setState({ email: event.target.value });
  }

  changeMessage(event) {
    return this.setState({ message: event.target.value });
  }

  render() {
    return (
      <form>
        <form>
          <input
            id="contact-name"
            type="text"
            value={this.state.name}
            onChange={this.changeName}
            placeholder="Name"
          />
          <input
            id="contact-mail"
            type="email"
            value={this.state.email}
            onChange={this.changeEmail}
            placeholder="E-mail"
          />
          <select id="contact-select" name="topic">
            <option value="Feedback">Feedback</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            id="contact-textarea"
            type="text"
            value={this.state.message}
            onChange={this.changeMessage}
            placeholder="Message"
          />
        </form>
      </form>
    );
  }
}

export default ContactForm;
