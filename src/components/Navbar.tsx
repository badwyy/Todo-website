import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
const { pathname } = useLocation();
const storageKey="loggedInUser";
const  userDataString=localStorage.getItem(storageKey);
const userData=userDataString?JSON.parse(userDataString):null;

const onLogout=()=>{
  localStorage.removeItem(storageKey);

  setTimeout(()=>{
    location.replace(pathname)
  },1500)

  
}

  return (
    <nav className="max-w-lg mx-auto mt-7 mb-20 bg-indigo-600 px-3 py-5 rounded-md">
      <ul className="flex items-center justify-between">
        <li className="text-white duration-200 font-semibold text-lg">
          <NavLink to="/">Home</NavLink>
        </li>
        {
          userData?
          // if
          (
            <div className="flex space-x-4">
              <li className="text-white duration-200  text-lg">
              <NavLink to="/profile">profile</NavLink>
            </li>
              {/* <span>{userData.user.username}</span> */}
              <span className="cursor-pointer" onClick={onLogout}>Logout</span>
            </div>
          )  :   //else
          (<p className="flex items-center space-x-3">
            <li className="text-white duration-200 font-semibold text-lg">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="text-white duration-200 font-semibold text-lg">
              <NavLink to="/login">Login</NavLink>
            </li>
          </p>
          )
        }

      </ul>
    </nav>
  );
};

export default Navbar;
