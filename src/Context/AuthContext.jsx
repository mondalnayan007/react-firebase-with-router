// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { 
   
//     GoogleAuthProvider, 
//     signInWithPopup, 
//     signOut, 
//     onAuthStateChanged, 
//     GithubAuthProvider,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword
// } from "firebase/auth";
// import  { auth } from '../firebase/firebase.config';
//  // তোমার ফায়ারবেস কনফিগ ফাইলের পাথ

// // ১. কনটেক্সট তৈরি
// const AuthContext = createContext();

// // ফায়ারবেস auth এবং গুগল প্রোভাইডার ইনিশিয়ালাইজ করা

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// // ২. প্রোভাইডার কম্পোনেন্ট
// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);



//     const createUser =(email,password)=>{
//             setLoading(true);
//             return createUserWithEmailAndPassword(auth,email,password)
//     }

//     const loginWithEmail = (email,password)=>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth,email,password);
//     }

//     // 🚀 গুগল দিয়ে লগইন করার ফাংশন
//     const loginWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     };

//     const loginWithGithub = () => {
//     setLoading(true);
//     return signInWithPopup(auth, githubProvider);
// };

//     // 🚪 লগআউট করার ফাংশন
//     const logout = () => {
//         setLoading(true);
//         return signOut(auth);
//     };

//     // 👁️ ফায়ারবেস অবজারভার (ইউজার লগইন আছে কি নাই তা লাইভ ট্র্যাক করে)
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser); // গুগল থেকে আসা ইউজারের সব ডাটা স্টেটে সেভ হবে
//             setLoading(false);    // ডাটা পেয়ে গেলে লোডিং বন্ধ হবে
//             console.log("Current User Status changed to: ", currentUser);
//         });

//         // কম্পোনেন্ট আনমাউন্ট হলে লিসেনার বন্ধ করার জন্য cleanup
//         return () => unsubscribe();
//     }, []);

//     // গ্লোবাল ভ্যালু অবজেক্ট
//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         loginWithEmail,
//         loginWithGoogle,
//         loginWithGithub,
//         logout
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {/* ফায়ারবেস থেকে প্রথমবার ডাটা লোড হওয়ার আগে অ্যাপ রেন্ডার হবে না */}
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };

// // ৩. কাস্টম হুক (চাবি)
// export  const useAuth = () => useContext(AuthContext);