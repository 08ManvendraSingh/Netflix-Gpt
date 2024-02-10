import Header from "./Header";
import {useState,useRef} from 'react';
import {checkValidData} from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {BG_URL, USER_AVATAR} from '../utils/constants';

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errMessage,setErrMessage]=useState(null);
  const dispatch=useDispatch();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleBtnClick=()=>{
    const message=checkValidData(email.current.value,password.current.value);
    setErrMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName:name.current.value, 
          photoURL:USER_AVATAR
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        }).catch((error) => {
          setErrMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode+'-'+errorMessage);
      });
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode+'-'+errMessage);
      });
    }
  };

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }  

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className="h-screen w-screen object-cover" src={BG_URL} alt="" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-full md:w-3/12 text-white bg-black bg-opacity-80 px-12 py-16 my-24 mx-auto right-0 left-0 rounded-lg'>
            <h3 className='font-semibold mb-8 text-3xl'>{isSignInForm?'Sign In':'Sign Up'}</h3>
            {!isSignInForm && <input ref={name} className='w-full rounded-md bg-slate-800 outline-none border-none px-6 py-3 mb-4' type="text" placeholder='Name' />}
            <input ref={email} className='w-full rounded-md bg-slate-800 outline-none border-none px-6 py-3 mb-4' type="text" placeholder='Email or phone number' />
            <input ref={password} className='w-full rounded-md bg-slate-800 outline-none border-none px-6 py-3 mb-4' type="password" placeholder='Password'/>
            <p className="text-orange-600 mb-8">{errMessage}</p>
            <button onClick={handleBtnClick} className='w-full rounded-md bg-red-700 font-semibold outline-none border-none px-6 py-3'>{isSignInForm?'Sign In':'Sign Up'}</button>
            <h4 className='text-gray-500 mt-10'><span onClick={toggleSignInForm} className='text-white cursor-pointer'>{isSignInForm?'New to Netflix? Sign up now':'Already Registered? Sing in now'}</span></h4>
        </form>
    </div>
  )
}

export default Login;