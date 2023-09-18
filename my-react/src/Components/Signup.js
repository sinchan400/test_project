import React from 'react'
import { toast } from 'react-toastify';
const SignUp = () => {
  
  const handleSignUp = (e) => {
    e.preventDefault();
    toast.success('Account created successfully!', { autoClose: 3000 });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-info" id="b-img">
      <div className="border border-3 border-success p-5 bg-light">
        <form>
          <h2 className="text-center">Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Enter Your Email" name="Email" className="form-control"/>
          </div>
          <div className="mb-3">
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder="Enter Your Password" name="password" className="form-control"/>
          </div>
          <div className="mb-3">
            <input type="checkbox"/>
            <label htmlFor="Checkbox" className="ms-2">
              Remember Your Password
            </label>
          </div>
          <br/>
          <div className="d-grid">
            <button className="btn btn-danger" onClick={handleSignUp}>Sign Up</button>
          </div>
         
        </form>
      </div>
      
    </div>
  );
}

export default SignUp;