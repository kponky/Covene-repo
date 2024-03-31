import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    
    <div className='signupWrapper'>
    <section>
   <div className='Form-side'>
   <h1>Sign Up</h1>

         <form>
        <input type="text" name="firstName" placeholder='First Name' required /><br /><br />
        
        <input type="text"  name="lastName" placeholder='Last Name' required /><br /><br />
        
        <input type="email" name="email" placeholder='Email' required  /><br /><br />

        <input type="tel" name="phone number" placeholder='Phone Number' pattern="{+0-9}[13]" required  /><br /><br />

        <input type="password" name="password" placeholder='Password' required /><br /><br />
        
        <input type="password" name="password" placeholder=' Confirm Password' required /><br /><br />         
        </form>
        <div className='additional-options'>
        <p>Already have an account? <a href='#'>Sign up here</a> </p>
        </div>
      
      </div>
      </section>


      <section>
      <div className='form-img'>
    this is my img
      </div>
      
      </section>
    </div>
    
  );
};

export default Signup;
