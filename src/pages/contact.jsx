import React, { useState } from 'react';
import '../styles/Contact.css';

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
    <>
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
            {border: 'orange', 
              borderRadius: '10px',
              fontSize: '1.5rem',
              padding: '10px 20px',
              fontWeight: 'bold',
              marginTop: '30px',
              marginBottom: '50px',
              outline: 'none'}}>
                Submit</button>
        </div>
      </form>
    </div>


    <h5 style={{fontSize : "2rem", margin: "20px 0", textAlign: "center", color: "white"}}>Our Team</h5> 

    <div className='container-fluid d-flex flex-wrap justify-content-center' style={{color: "white", textAlign: "center", padding : "30px"}}>
  <div className="member">
    <a href="https://github.com/aleisharhys" target='_blank' style={{color : "white", textDecoration: "none", fontSize : "1.5rem"}}>
      <img src="/Aleisha.jpg" alt="Aleisha" style={{marginBottom: "10px", width: "200px", height: "200px"}} /> <br/> Aleisha Rhys
    </a>
  </div>
  <div className="member">
    <a href="https://github.com/AndyFt" target='_blank' style={{color : "white", textDecoration: "none", fontSize : "1.5rem"}}>
      <img src="/Andrea.jpg" alt="Andrea" style={{marginBottom: "10px", width: "200px", height: "200px"}} /> <br/> Andrea Fontana
    </a>
  </div>
  <div className="member">
    <a href="https://github.com/chrisma89" target='_blank' style={{color : "white", textDecoration: "none", fontSize : "1.5rem"}}>
      <img src="/Chrisma.jpg" alt="Chrisma" style={{marginBottom: "10px", width: "200px", height: "200px"}} /> <br/> Chrisma Stephen
    </a>
  </div>
  <div className="member">
    <a href="https://github.com/elismountain" target='_blank' style={{color : "white", textDecoration: "none", fontSize : "1.5rem"}}>
      <img src="/Olga.jpg" alt="Olga" style={{marginBottom: "10px", width: "200px", height: "200px"}} /> <br/> Olga Avramenko
    </a>
  </div>
  <div className="member">
    <a href="https://github.com/SamiraBalayoglu" target='_blank' style={{color : "white", textDecoration: "none", fontSize : "1.5rem"}}>
      <img src="/Samira.jpg" alt="Samira" style={{marginBottom: "10px", width: "200px", height: "200px"}} /> <br/> Samira Balayoglu
    </a>
  </div>
</div>

    

     </>
  );
}

export default Contact;
