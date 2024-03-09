import { useState } from 'react'
import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'
import ListAccountsConpoment from './components/ListAccountsConpoment'
import AddAccount from './components/AddAccount'
import DepositComponent from './components/DepositComponent'
import DraftComponent from './components/DraftComponent'
import UpdateAccountComponent from './components/UpdateAccountComponent'

function App() {

  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth) {
      return children;
    }

    return <Navigate to="/" />

  }

  return (
    <>
    <BrowserRouter>
        <HeaderComponent />
          <Routes>
              {/* http://localhost:8080 */}
              <Route path='/' element = { <LoginComponent /> }></Route>
               {/* http://localhost:8080/todos */}
              <Route path='/todos' element = { 
              <AuthenticatedRoute>
                <ListTodoComponent />
              </AuthenticatedRoute> 
              }></Route>
              {/* http://localhost:8080/add-todo */}
              <Route path='/add-todo' element = { 
                <AuthenticatedRoute>
                <TodoComponent /> 
                </AuthenticatedRoute>
              }></Route>
              {/* http://localhost:8080/update-todo/1 */}
              <Route path='/update-todo/:id' element = { 
              <AuthenticatedRoute>
              <TodoComponent /> 
              </AuthenticatedRoute>
              }></Route>
               {/* http://localhost:8080/register */}
              <Route path='/register' element = { <RegisterComponent />}></Route>

               {/* http://localhost:8080/login */}
               <Route path='/login' element = { <LoginComponent /> }></Route>
               <Route path='/accounts' element = { <ListAccountsConpoment />}></Route>
               <Route path='/add-account' element = { <AddAccount />}></Route>
               <Route path='/deposit' element = { <DepositComponent />}></Route>
               <Route path='/draft' element = { <DraftComponent />}></Route>
               <Route path='/update-account/:id' element = {<UpdateAccountComponent/> }></Route>

          </Routes>
        <FooterComponent />
        </BrowserRouter>
    </>
  )
}

export default App
