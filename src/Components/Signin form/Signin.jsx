import React from 'react'
import './Signin.css'

const Signin = () => {
  return (
    <>
    <div className='loginWrapper'>
    <section>
   <div className='Form-side'>
   <h1>Login</h1>

         <form>
         <input type="email" name="email" placeholder='Email' required  /><br /><br />
        
        <input type="password" name="password" placeholder='Password' required /><br /><br />
        
        <button> Login in</button>        
       
      </form>

      <div className='additional-options'>
      <p>Don't have an account? <a href='#'>Sign up here</a> </p>
      <span> Forget password <a href='#'>Go here</a> </span>
      </div>
    
      </div>
      </section>


      <section>
      <div className='form-img'>
    this is my img
      </div>
      
      </section>
    </div>
    </>
  )
}

export default Signin
