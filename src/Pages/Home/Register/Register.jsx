import React from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../../../firebase/firebase.config';
import { useNavigate } from 'react-router';


const Register = () => {

    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
   

     const handelRegister =(e)=>{
        e.preventDefault();

        const email = e.target.email.value ;
        const password = e.target.password.value ;
        createUserWithEmailAndPassword(auth,email,password)
        .then(res =>{
            alert('User successfully created !!!');
            navigate('/');
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })

       
     }

     const handleGoogleLogin =()=>{
        // alert('google login is clicked !!!!')

        signInWithPopup(auth,googleProvider)
        .then(res =>{
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

     }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handelRegister} >
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <button onClick={handleGoogleLogin} className='border py-2 px-4 rounded cursor-pointer'>Login with google </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;