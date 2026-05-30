import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { use } from 'react';
import { auth } from '../../../firebase/firebase.config';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../../Context/AuthContext';



const Login = () => {

    const {signInUser } = use(AuthContext)

    const navigate = useNavigate();
     const googleProvider = new GoogleAuthProvider();

    const gitHubProvider = new GithubAuthProvider();
   
    

    const handelLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value ;
        const password = e.target.password.value ;
        signInUser(email,password)
        .then(res=>{
            alert('Login Successful !!!');
            navigate('/');
            console.log(res);})
        .catch(err => {alert('Login failed : ',err);})
        
    };
    const handleGoogleLogin = () => {
         // alert('google login is clicked !!!!')

        signInWithPopup(auth,googleProvider)
        .then(res =>{
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

    };

    const handleGitHubLogin = () => {
        signInWithPopup(auth,gitHubProvider)
               .then(res =>{console.log(res);})
               .catch(err => console.log(err));
    };

    const handleSignOut = () => {
       signOut(auth)
       .then(res => {
          alert('sign Out successful !!!')
          console.log(res);
       })
       .catch(err => {console.log(err);})
    };

    return (
         <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login</h1>
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
                            <button onClick={handleSignOut} className='border py-2 px-4 rounded cursor-pointer'>Logout</button>
                        </div>
                        <p className='text-center mb-4'>New in this website ?? <Link className='underline text-blue-600' to={'/register'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;