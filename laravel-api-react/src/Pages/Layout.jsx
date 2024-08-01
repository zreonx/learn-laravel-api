import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

export default function Layout() {
  const { user, token, setUser, setToken } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/logout", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    console.log(data);
    if (res.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  };
  return (
    <>
      <header>
        <nav>
          <Link to='/' className='nav-link'>
            Home
          </Link>

          {user ? (
            <div className='space-x-4 flex items-center'>
              <p className='text-slate-50 capitalize'>
                Welcome Back {user.name}!
              </p>
              <form onSubmit={handleLogout}>
                <button className='nav-link'>Logout</button>
              </form>
            </div>
          ) : (
            <div className='space-x-4'>
              <Link to='/register' className='nav-link'>
                Register
              </Link>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
