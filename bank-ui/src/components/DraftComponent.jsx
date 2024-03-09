import { draft } from '../services/AccountService'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DraftComponent = () => {
  const [id, setId] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleDraft = async () => {
    try {
      const response = await draft(id, amount);
      // Assuming '/todos' is the route you want to navigate to
      console.log('After draft', response);
      navigate('/accounts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Draft Component</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>ID:</label>
                <input className='form-control' type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <br />
                <label className='form-label'>Amount:</label>
                <input className='form-control' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <br />
                <button className='btn btn-success' onClick={handleDraft}>Draft</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftComponent;
