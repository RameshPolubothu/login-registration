import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast'; // Import Toast from Bootstrap

function Signup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [rpassword, setrpassword] = useState("");
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password, rpassword })
            .then(result => {
                console.log(result);
                setShowToast(true); // Show toast on successful registration
                setTimeout(() => {
                    setShowToast(false); // Hide toast after a delay
                    navigate('/login'); // Redirect to login page
                }, 700);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '300px' }}>
                <h3 className="text-center">Register</h3>
                <Toast
                    show={showToast} // Show toast when showToast is true
                    onClose={() => setShowToast(false)} // Close toast when clicked
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: '9999',
                        backgroundColor: '#007bff', // Dark blue color
                        color: '#ffffff', // White text color
                    }}
                >
                    <Toast.Body>User successfully registered!</Toast.Body>
                </Toast>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            onChange={(event) => setname(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email"
                            onChange={(event) => setemail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            onChange={(event) => setpassword(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rpassword" className="form-label"><strong>ResetPassword</strong></label>
                        <input
                            type="password"
                            className="form-control"
                            id="rpassword"
                            placeholder="ReEnter Password"
                            onChange={(event) => setrpassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
                <div className="text-center mt-3">
                    <p>Already Have an Account</p>
                    <Link to='/login' className="btn btn-secondary w-100">Login</Link>
                </div>
                
            </div>
            
        </div>
        
    );
};

export default Signup;
