import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {

    const [user, setUser] = useState([]);

    console.log(user);
    const handleGoogleSignIn = () => {
        // alert("google sign in clicked !!!!!")

        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                alert("Sign Out successful !!!!")
                setUser(null);
            })
            .catch(err => {
                console.log(err);
            })
    }


    const handleSignInWithGitHub =()=>{
      signInWithPopup(auth , githubProvider)
      .then(result =>{
        setUser(result.user)
      })
      .catch(err =>{
        console.log(err);
      })
    }



    return (
        <div className='flex items-center justify-center flex-col gap-3 h-screen'>
            <h1>Please login</h1>


            {
                user ?
                    <button className='btn border py-2 px-4 rounded cursor-pointer' onClick={handleSignOut}>Sign Out</button>
                    :
                    <div className='flex flex-col gap-3'>
                        <button onClick={handleGoogleSignIn} className="flex items-center cursor-pointer justify-center gap-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-200">
                            {/* Google SVG Logo */}
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                            </svg>
                            <span>Sign in with Google</span>
                        </button>

                        <button className='btn border py-2 px-4 rounded cursor-pointer' onClick={handleSignInWithGitHub}>Sign In With GitHub</button>
                    </div>

            }



            <h1>{user?.displayName}</h1>
            <h1>{user?.email}</h1>

            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Login;