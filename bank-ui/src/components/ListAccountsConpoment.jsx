import React, { useEffect, useState } from 'react'
import {  getAllAccounts, deleteAccount } from '../services/AccountService'
import { useNavigate } from 'react-router-dom'

const ListAccountComponent = () => {

    const [accounts, setAccounts] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        listAccounts();
    }, [])
    
    function listAccounts(){
        getAllAccounts().then((response) => {
            setAccounts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

  

    function updateAccount(id){
        console.log(id)
        navigate(`/update-account/${id}`)
    }
    
    function removeAccount(id){
        deleteAccount(id).then((response) => {
            listAccounts();
        }).catch(error => {
            console.error(error)
        })
    }

   



  return (
    <div className='container'>
        <h2 className='text-center'>List of Accounts</h2>
       
       
      
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Holder name</th>
                        <th>Holder email</th>
                        <th>Mobile</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Nationality</th>
                        <th>Bakance</th>
                        <th>Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(account => 
                            <tr key={account.id}>
                                <td>{account.holderName}</td>
                                <td>{account.holderEmail}</td>
                                <td>{account.mobile}</td>
                                <td>{account.gender}</td>
                                <td>{account.age}</td>
                                <td>{account.nationality}</td>
                                <td>{account.balance}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeAccount(account.id)} style={ { marginLeft: "10px" }} >Delete</button>
                                    <button className='btn btn-info' onClick={() => updateAccount(account.id)}>Update</button>
                                </td>
                               
                               
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ListAccountComponent