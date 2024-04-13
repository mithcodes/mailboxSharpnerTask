import React, { useState } from 'react';
import styles from './Login.module.css'; // Corrected import statement
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <>
      <div className={styles.head}>
        <h3 className='text-white'>Welcome to mailbox! Login Now</h3> {/* Changed "sign up" to "sign in" */}
      </div>

      <div className="container mt-2">
        <form>
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
          <h6 className='mt-3'>Do not  have an Account ? <Link to="/">Create Now</Link></h6>
        
        </form>
      </div>
    </>
  );
};

export default Login;
