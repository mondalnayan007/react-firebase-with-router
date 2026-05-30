import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../firebase/firebase.config';
import { useNavigate } from 'react-router';



const Login = () => {

    const navigate = useNavigate();
    
    

    const handelLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value ;
        const password = e.target.password.value ;
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            alert('Login Successful !!!');
            navigate('/');
            console.log(res);})
        .catch(err => {alert('Login failed : ',err);})
        
    };
    const handleGoogleLogin = () => {
        
    };

    const handleGitHubLogin = () => {
       
    };

    const handleSignOut = () => {
       
    };

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
                            <form onSubmit={handelLogin} >
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <button onClick={handleGoogleLogin} className='border py-2 px-4 rounded cursor-pointer'>Login with google </button>
                            <button onClick={handleGitHubLogin} className='border py-2 px-4 rounded cursor-pointer'>Login with GitHub </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;