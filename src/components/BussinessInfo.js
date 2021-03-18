import { useState } from 'react';

function BussinessInfo({ updateStore, store, compkey, goBack }) {
  const [bussinessInfo, setBussinessInfo] = useState({ ...store[compkey] });
  const inputHandler = (event) => {
    setBussinessInfo((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const nextHandler = () => {
    const keyArray = bussinessInfo && Object.keys(bussinessInfo);
    if (keyArray && keyArray.length < 11) {
      alert('Please fill all fields. all fields are required.');
    } else {
      updateStore(compkey, bussinessInfo);
      console.log('bussinessInfo =>', bussinessInfo);
    }
  };
  console.log('store =>', store);
  return (
    <div>
      <section className='mt-2 p-2 card'>
        <h3>Bussiness Info</h3>
        <div className='d-flex p-3'>
          <label htmlFor='bname' className='w-25'>
            Bussiness Name
          </label>
          <input id='bname' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='breg' className='w-25'>
            State Registered
          </label>
          <input id='breg' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='baddress' className='w-25'>
            Address
          </label>
          <input id='baddress' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='bcity' className='w-25'>
            City
          </label>
          <input id='bcity' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='bstate' className='w-25'>
            State
          </label>
          <input id='bstate' type='text' pattern='[a-zA-Z]{2}' maxLength='2' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='bzipcode' className='w-25'>
            Zip Code
          </label>
          <input id='bzipcode' type='number' pattern='[0-9]{6}' maxLength='6' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
      </section>
      <br />
      <section className='mt-2 p-2 card'>
        <h3>Debit Card Info</h3>
        <div className='d-flex p-3'>
          <label htmlFor='dname' className='w-25'>
            Name On Debit Card
          </label>
          <input id='dname' type='number' pattern='[0-9]{6}' maxLength='6' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='daddress' className='w-25'>
            Address
          </label>
          <input id='daddress' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='dcity' className='w-25'>
            City
          </label>
          <input id='dcity' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='dstate' className='w-25'>
            State
          </label>
          <input id='dstate' type='text' pattern='[a-zA-Z]{2}' maxLength='2' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
        <div className='d-flex p-3'>
          <label htmlFor='dzipcode' className='w-25'>
            Zip Code
          </label>
          <input id='dzipcode' type='number' pattern='[0-9]{6}' maxLength='6' className='flex-grow-1 ml-2' onChange={inputHandler} required></input>
        </div>
      </section>
      <div className='mt-2'>
        <button onClick={goBack}>Back</button>
        <button className='ml-2' onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default BussinessInfo;
