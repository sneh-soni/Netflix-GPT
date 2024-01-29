import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Languages, logo } from "../utils/constants";
import { toggleGPT } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGPT = useSelector((store) => store.gpt.showGPT);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-40 lg:px-28 h-1/6 w-screen flex flex-col lg:flex-row justify-between items-center bg-gradient-to-b from-black">
      <div className="h-4/5">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-full" />
        </Link>
      </div>

      <div className="flex gap-4 lg:gap-8">
        {showGPT && (
          <div className="flex items-center">
            <select
              className="px-4 py-1 rounded-lg bg-black bg-opacity-50 mx-2 text-white border border-white"
              onChange={(e) => {
                dispatch(changeLanguage(e.target.value));
              }}
            >
              {Languages.map((language) => (
                <option key={language.id} value={language.id}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {user && (
          <>
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {})
                  .catch((error) => {
                    navigate("/error");
                  });
              }}
              className="px-3 py-2 bg-red-600 text-white font-bold rounded-md text-sm hover:bg-red-700"
            >
              Sign Out
            </button>

            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-800 text-white font-semibold rounded-xl"
                onClick={() => {
                  dispatch(toggleGPT());
                }}
              >
                {showGPT ? "Browse" : "Gpt Search"}
              </button>

              <img
                src={user.photoURL}
                alt="profile photo"
                className="h-10 w-10 rounded-full"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
