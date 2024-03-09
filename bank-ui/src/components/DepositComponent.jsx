import { deposit } from '../services/AccountService'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DepositComponent = () => {
  const [id, setId] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleDeposit = async () => {
    try {
      const response = await deposit(id, amount);
      // Assuming '/todos' is the route you want to navigate to
      console.log('After deposit', response);
      navigate('/todos');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Deposit Component</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>ID:</label>
                <input className='form-control' type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <br />
                <label className='form-label'>Amount:</label>
                <input className='form-control' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <br />
                <button className='btn btn-success' onClick={handleDeposit}>Deposit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositComponent;
