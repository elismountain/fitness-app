import React, { useState } from 'react';
import './Contact.css';

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
    e.preventDefault(); 
    console.log('Form Data:', formData); 
    alert("Thanks! We will be in touch!"); 
  };


  return (
    <div className="container contact-form">
      <h2 className="contact-header">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" style={{ color:  'white', fontSize : "1.5rem", margin : "10px"}} className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" style={{ color:  'white', fontSize : "1.5rem", margin : "10px"}} className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="message" style={{ color:  'white', fontSize : "1.5rem", margin : "10px"}} className="form-label">Message:</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary contact-button" 
          style={      
            {backgroundColor: 'orange',
              border: 'orange', 
              borderRadius: '10px',
              fontSize: '1.5rem',
              padding: '10px 20px',
              fontWeight: 'bold',
              marginTop: '30px',
              marginBottom: '290px',
              outline: 'none'}}>
                Submit</button>
        </div>

      </form>
    </div>
  );
}

export default Contact;
