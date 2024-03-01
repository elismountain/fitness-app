import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    console.log('Form Data:', formData); // Logs form data to console
    alert("Thanks! We will be in touch!"); // Corrected alert message
    // Here you could also handle the submission, e.g., sending it to an API or email
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
