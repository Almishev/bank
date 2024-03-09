import React, { useState, useEffect } from 'react';
import { getAccount, updateAccount } from '../services/AccountService'; 
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAccountComponent = () => {
    const [account, setAccount] = useState({
        id: null,
        holderName: '',
        holderEmail: '',
        mobile: '',
        gender: '',
        age: 18, 
        nationality: '',
        balance: 50.0,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccountDetails = async () => {
            try {
                const response = await getAccount(id);
                const accountData = response.data;
                setAccount({
                    id: accountData.id,
                    holderName: accountData.holderName,
                    holderEmail: accountData.holderEmail,
                    mobile: accountData.mobile,
                    gender: accountData.gender,
                    age: accountData.age,
                    nationality: accountData.nationality,
                    balance: accountData.balance,
                });
            } catch (error) {
                console.error('Error fetching account details:', error);
            }
        };

        fetchAccountDetails();
    }, [id]);

    const handleUpdateAccount = async (e) => {
        e.preventDefault();

        try {
            await updateAccount(id, account);
            console.log('Account updated successfully');
            navigate('/accounts');
        } catch (error) {
            console.error('Error updating account:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value,
        }));
    };

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Update Account</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Holder Name:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Holder Name'
                                    name='holderName'
                                    value={account.holderName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Holder Email:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Holder Email'
                                    name='holderEmail'
                                    value={account.holderEmail}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Mobile:</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Enter Mobile'
                                    name='mobile'
                                    value={account.mobile}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Gender:</label>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='gender'
                                            value='female'
                                            checked={account.gender === 'female'}
                                            onChange={handleChange}
                                        />
                                        Female
                                    </label>
                                    <label style={{ marginLeft: '10px' }}>
                                        <input
                                            type='radio'
                                            name='gender'
                                            value='male'
                                            checked={account.gender === 'male'}
                                            onChange={handleChange}
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
                                    placeholder='Enter Age'
                                    name='age'
                                    value={account.age}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Nationality:</label>
                                <select
                                    className='form-control'
                                    name='nationality'
                                    value={account.nationality}
                                    onChange={handleChange}
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
                                    placeholder='Enter Balance'
                                    name='balance'
                                    value={account.balance}
                                    onChange={handleChange}
                                />
                            </div>

                            <button className='btn btn-success' onClick={handleUpdateAccount}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAccountComponent;

