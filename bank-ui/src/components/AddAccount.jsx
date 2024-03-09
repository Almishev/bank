

import React, { useState } from 'react';
import { saveAccount as saveAccountService } from '../services/AccountService'; // Rename saveAccount to avoid conflicts
import { useNavigate, useParams } from 'react-router-dom';


const AddAccount = () => {

    const [holderName, setHolderName] = useState('')
    const [holderEmail, setHolderEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [nationality, setNationality] = useState('')
    const [balance, setBalance] = useState('')
    
    const navigate = useNavigate()
  


    function handleSaveAccount(e) {
        e.preventDefault();

        const account = { holderName, holderEmail, mobile, gender, age, nationality, balance };
        console.log(account);

        saveAccountService(account)
            .then((response) => {
                console.log(response.data);
                navigate('/accounts');
            })
            .catch((error) => {
                console.error(error);
            });
    }


  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
               <h2 className='text-center'>Add new account</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Holder name:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter holder name'
                                name='holderName'
                                value={holderName}
                                onChange={(e) => setHolderName(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Holder email:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter holder email'
                                name='holderEmail'
                                value={holderEmail}
                                onChange={(e) => setHolderEmail(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Mobile:</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Enter mobile'
                                name='mobile'
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
    <label className='form-label'>Gender:</label>
    <div>
        <label>
            <input
                type='radio'
                name='gender'
                value='female'
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
            />
            Female
        </label>
        <label style={{ marginLeft: '10px' }}>
            <input
                type='radio'
                name='gender'
                value='male'
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
            />
            Male
        </label>
    </div>
</div>

                       
                        <div className='form-group mb-2'>
                            <label className='form-label'>Age:</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Enter age'
                                name='age'
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
    <label className='form-label'>Nationality:</label>
    <select
        className='form-control'
        name='nationality'
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
    >
        <option value=''>Select Nationality</option>
        <option value='Bulgarian'>Bulgarian</option>
        <option value='Greek'>Greek</option>
        <option value='Makedonian'>Makedonian</option>
        <option value='Turkish'>Turkish</option>
    </select>
</div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Balance:</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Enter banalce'
                                name='balance'
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                            >
                            </input>
                        </div>

                       

                        <button className='btn btn-success' onClick={(e) => handleSaveAccount(e)}>
                                Submit
                            </button>

                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default AddAccount