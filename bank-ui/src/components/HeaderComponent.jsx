import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'


const HeaderComponent = () => {

    const isAuth = isUserLoggedIn();

    const navigator = useNavigate();

    function handleLogout(){
        logout();
        navigator('/login')
    }

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='http://localhost:3000' className='navbar-brand'>
                        Bank Management Application
                    </a>
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>

                        {
                            isAuth &&                         
                            <li className='nav-item'>
                            <NavLink to="/todos" className="nav-link">Todos</NavLink>
                        </li>
                        }
                         {
                            isAuth &&                         
                            <li className='nav-item'>
                            <NavLink to="/accounts" className="nav-link">Accounts</NavLink>
                        </li>
                        }
                         {
                            isAuth &&                         
                            <li className='nav-item'>
                            <NavLink to="/add-account" className="nav-link">Add Account</NavLink>
                        </li>
                        }
                         {
                            isAuth &&                         
                            <li className='nav-item'>
                            <NavLink to="/deposit" className="nav-link">Deposit</NavLink>
                        </li>
                        }
                         {
                            isAuth &&                         
                            <li className='nav-item'>
                            <NavLink to="/draft" className="nav-link">Draft</NavLink>
                        </li>
                        }

                    </ul>

                </div>
                <ul className='navbar-nav'>
                    {
                        !isAuth &&                         
                        <li className='nav-item'>
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                    }

                    {
                        !isAuth &&    
                        <li className='nav-item'>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    }

                    {
                        isAuth &&    
                        <li className='nav-item'>
                        <NavLink to="/login" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                    </li>
                    }

                    </ul>
            </nav>
        </header>

    </div>
  )
}

export default HeaderComponent