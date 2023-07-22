import { ReactComponent as Logo } from "./../Styles/Logo.svg";
import { ReactComponent as KeazonBooks } from "./../Styles/KeazonBooks.svg";
import { ReactComponent as Search } from "./../Styles/Search.svg";
import { ReactComponent as HeartIcon } from "./../Styles/HeartIcon.svg";
import { ReactComponent as BellIcon } from "./../Styles/BellIcon.svg";
import { ReactComponent as PremiumIcon } from "./../Styles/PremiunIcon.svg";
import { ReactComponent as Profile } from "./../Styles/Profile.svg";
import { useState } from "react";
//import {ReactComponent as Arrow} from "./../Styles/Arrow.svg"

const Navbar = ({changeState}) => {

  let [str, setStr] = useState("")

  function setString(event){
    console.log(str)
    changeState(str)
  } 
 
  return (
    <div className="navbar">
      <div className="logo-div">
        <div>
          <Logo />
        </div>
        <div>
          <KeazonBooks />
        </div>
      </div>

      <div className="search-div">
        <div className="input-div">
          <div>
            <Search />
          </div>
          <input
            type="search"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            onChange={(e) => setStr(e.target.value)}
            value={str}
          ></input>
        </div>
        <button onClick={setString}>Search</button>
      </div>

      <div className="icons-div">
        <div>
          <HeartIcon />
        </div>
        <div>
          <BellIcon />
        </div>
        <div>
          <PremiumIcon />
        </div>
        <div className="profile-div">
            <div>
            <Profile />
            </div>
            {/* <div>
                <Arrow />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
