import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO,SUPPORTED_LANGUAGES,USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {  

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

  const handleSignOut=()=>{
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate('/error');
    });
  };

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return ()=>unsubscribe();
  },[]);

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  } 

  return (
    <div className="absolute w-screen flex flex-col md:flex-row justify-between items-center px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="" />
        {user &&
          <div className="flex justify-between gap-2">
            {showGptSearch &&
              <select className="p-2 m-2" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((x)=><option key={x.identifier} value={x.identifier}>{x.name}</option>)}
              </select>
            }
            <button onClick={handleGptSearchClick} className="py-2 px-4 bg-purple-800 text-white rounded-lg">{!showGptSearch?'GPT Seearch':'HomePage'}</button>
            <img className="md:block hidden w-8" src={USER_AVATAR} alt="" />
            <button onClick={handleSignOut} className="text-white">Sign Out</button>
          </div>
        }
    </div>

  )
}

export default Header;