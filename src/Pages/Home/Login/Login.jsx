import React from 'react';


const Login = () => {
    
    

    const handleGoogleSignIn = () => {
        
    };

    const handleSignInWithGitHub = () => {
       
    };

    const handleSignOut = () => {
       
    };

    return (
        <div className='flex items-center justify-center flex-col gap-3 h-screen'>
            <h1>Please login</h1>



            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form >
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    
                                        
                                            {/* <button className='btn border py-2 px-4 rounded cursor-pointer' onClick={handleSignOut}>Sign Out</button>
                                             */}
                                            <div className='flex flex-col gap-3'>
                                                {/* Google Login Button */}
                                                <button onClick={handleGoogleSignIn} className="flex items-center cursor-pointer justify-center gap-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-200">
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                                                    </svg>
                                                    <span>Sign in with Google</span>
                                                </button>

                                                {/* GitHub Login Button */}
                                                <button className='btn border py-2 px-4 rounded cursor-pointer' onClick={handleSignInWithGitHub}>
                                                    Sign In With GitHub
                                                </button>
                                            </div>
                                    

                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* 👈 ৩. গ্লোবাল user স্টেট দিয়ে কন্ডিশনাল রেন্ডারিং হচ্ছে */}





        </div>
    );
};

export default Login;