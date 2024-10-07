import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.email || !credentials.password) {
      alert("Please fill all the details");
      return;
    }

    try {
      console.log('Sending request to', `${BASE_URL}/auth/register`);
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error:', error.message);
        alert(error.message);
      } else {
        const data = await response.json();
        console.log('Response:', data);
        dispatch({ type: 'REGISTER_SUCCESS', payload: data });
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <Input type="text" placeholder='Username' required id='username' value={credentials.userName} onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" placeholder='Email' required id='email' value={credentials.email} onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="password" placeholder='Password' required id='password' value={credentials.password} onChange={handleChange} />
                  </FormGroup>
                  <Button color="primary" className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login </Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;