import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "john Doe",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "active navbar" : "navbar"}>
      <div className='container'>
        <div className='logo'>
          <Link to={"/"} className='link'>
            <span className='text'>fiverr</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img src='https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
              <span>{currentUser?.userName}</span>
              {open && (
                <div className='options'>
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to={"/mygigs"}>
                        Gigs
                      </Link>
                      <Link className='link' to={"/add"}>
                        Add new Gig
                      </Link>
                    </>
                  )}
                  <Link className='link' to={"/orders"}>
                    Orders
                  </Link>
                  <Link className='link' to={"/messages"}>
                    massages
                  </Link>
                  <Link className='link' to={"/"}>
                    LogOut
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className='menu'>
              <span>Test1</span>
              <span>Test2</span>
            </div>
          </>
        ))}
    </div>
  );
};

export default Navbar;
