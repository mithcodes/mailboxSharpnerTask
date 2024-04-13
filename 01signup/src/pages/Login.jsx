import React, { useState } from 'react';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA44-cb4m78RrIm4B6-Lllff_gawB6Ef9s",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      let data = await response.json();

      if (data.error) {
        alert(data.error.message);
      } else {
        alert("Login successful!");
        // Handle successful login, such as storing tokens in local storage or state
        localStorage.setItem('token', data.idToken); // Storing the ID token in local storage for now
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred. Please try again.");
    }

    // Clear form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={styles.head}>
        <h3 className='text-white'>Welcome to mailbox! Login Now</h3>
      </div>

      <div className="container mt-2">
        <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
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
          <button type="submit" className="btn btn-primary">Login</button>
          <h6 className='mt-3'>Do not have an Account? <Link to="/">Create Now</Link></h6>
        </form>
      </div>
    </>
  );
};

export default Login;
