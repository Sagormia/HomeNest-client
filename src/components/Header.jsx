import { Link, NavLink } from "react-router";
import { RiHome8Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { AiOutlineLogout, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const { user, loader, logOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { href: "/", label: "Home" },
        { href: "/all-properties", label: "All Properties" },
        { href: "/add-properties", label: "Add Properties" },
        { href: "/my-properties", label: "My Properties" },
        { href: "/my-ratings", label: "My Ratings" },
    ];

    return (
        <header className="sticky top-0 w-full z-50 transition-all duration-300 py-3.5 bg-base-100 border-b border-gray-200">
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex gap-2 items-center z-50">
                    <div className="h-12 w-12 rounded-full flex-center bg-linear-to-l from-primary to-secondary text-3xl text-white">
                        <RiHome8Line />
                    </div>
                    <h1 className="text-2xl font-bold text-base-300">
                        Home<span className="text-primary">Nest</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className="relative font-medium transition-colors hover:text-primary"
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Theme toggle */}
                    <label className="swap swap-rotate"> 
                        <input type="checkbox" className="theme-controller" value="dark" /> 
                        <svg className="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /> 
                        </svg> 
                        {/* moon icon */} 
                        <svg className="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /> </svg> 
                    </label>

                    {/* Profile / Auth Buttons */}
                    {loader ? (
                        <span className="loading loading-ring loading-xl"></span>
                    ) : !user ? (
                        <div className="hidden lg:flex space-x-3">
                            <Link to="/login" className="button-outline">
                                Login
                            </Link>
                            <Link to="/register" className="button">
                                Signup
                            </Link>
                        </div>
                    ) : (
                        <div className="hidden lg:block dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="cursor-pointer">
                                <img
                                    src={user?.photoURL}
                                    referrerPolicy="no-referrer"
                                    className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                                    alt="Profile"
                                />
                            </div>
                            <ul
                                tabIndex="-1"
                                className="dropdown-content menu bg-base-100 rounded-box z-60 min-w-52 p-4 shadow-lg text-base-300 space-y-1"
                            >
                                <li className="font-bold text-lg">{user?.displayName}</li>
                                <li>{user.email}</li>
                                <li>
                                    <button
                                        className="bg-red-600/20 font-medium text-base mt-2 text-red-600 justify-between hover:bg-red-600 hover:text-white"
                                        onClick={logOut}
                                    >
                                        Logout <AiOutlineLogout className="text-lg" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Hamburger Menu */}
                    <button
                        className="lg:hidden cursor-pointer text-3xl text-base-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-base-100 border-t border-gray-200 shadow-md animate-fadeIn">
                    <nav className="flex flex-col items-start space-y-3 py-4 px-6">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-medium hover:text-primary"
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        {!user ? (
                            <div className="flex gap-2 w-full mt-3 pb-4">
                                <Link
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="button-outline text-center"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    onClick={() => setMenuOpen(false)}
                                    className="button text-center"
                                >
                                    Signup
                                </Link>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between w-full mt-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={user?.photoURL}
                                        referrerPolicy="no-referrer"
                                        className="h-10 w-10 rounded-full object-cover border"
                                        alt="Profile"
                                    />
                                    <div>
                                        <p className="font-semibold">{user?.displayName}</p>
                                        <p className="text-sm text-gray-500">{user?.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        logOut();
                                        setMenuOpen(false);
                                    }}
                                    className="text-red-600 cursor-pointer hover:text-red-800"
                                >
                                    <AiOutlineLogout size={22} />
                                </button>
                            </div>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
