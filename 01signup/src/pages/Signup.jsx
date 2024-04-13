import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Signup.module.css"
import { Link } from 'react-router-dom';

const Signup = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email and password are not empty
    if (email === "" || password === "") {
      alert("Please Enter Email and Password");
      return;
    }

    // Check if password matches confirm password
    if (password !== cnfPassword) {
      alert("Password does not match");
      return;
    }

    try {
      // API call for user registration
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA44-cb4m78RrIm4B6-Lllff_gawB6Ef9s",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      let data = await response.json();

      // Check API response for errors
      if (data.error) {
        alert(data.error.message);
      } else {
        alert("You have successfully registered!");
      }
    } catch (err) {
      console.log(err);
    }

    // Clear form fields after submission
    setEmail("");
    setPassword("");
    setCnfPassword("");
  }; 

  return (
    <>
      <div className={`${styles.head} text-center d-flex justify-content-center pt-4`}>
        <h3 className='text-white'>welcome to mailbox! Sign up ....</h3>
      </div>

      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword2" 
              onChange={(e) => setCnfPassword(e.target.value)}
              value={cnfPassword}
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
          <br/>
          <h6 className='mt-3'> Already have an account ? <Link to="/login">Login now</Link></h6>
        </form>
      </div>
    </>
  );
};

export default Signup;
