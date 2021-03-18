import { useState } from 'react';

function PersonalInfo(props) {
  const { updateStore, store, compkey } = props;
  const [personalInfo, setPersonalInfo] = useState({ ...store[compkey] });
  const inputHandler = (event) => {
    setPersonalInfo((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };
  const nextHandler = () => {
    const keyArray = personalInfo && Object.keys(personalInfo);
    if (keyArray && keyArray.length < 6) {
      alert('Please fill all fields. all fields are required.');
    } else {
      updateStore(compkey, personalInfo);
      console.log('personalInfo =>', personalInfo);
    }
  };

  const { pname, pssn, paddress, pcity, pstate, pzipcode } = personalInfo;
  return (
    <div>
      <h3>Personal Info</h3>
      <div className='d-flex p-3'>
        <label htmlFor='pname' className='w-25'>
          Name
        </label>
        <input id='pname' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} defaultValue={pname} required></input>
      </div>
      <div className='d-flex p-3'>
        <label htmlFor='pname' className='w-25'>
          SSN
        </label>
        <input id='pssn' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} defaultValue={pssn} required></input>
      </div>
      <div className='d-flex p-3'>
        <label htmlFor='pname' className='w-25'>
          Address
        </label>
        <input id='paddress' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} defaultValue={paddress} required></input>
      </div>
      <div className='d-flex p-3'>
        <label htmlFor='pname' className='w-25'>
          City
        </label>
        <input id='pcity' type='text' className='flex-grow-1 ml-2' onChange={inputHandler} defaultValue={pcity} required></input>
      </div>
      <div className='d-flex p-3'>
        <label htmlFor='pname' className='w-25'>
          State
        </label>
        <input id='pstate' type='text' pattern='[a-zA-Z]{2}' maxLength='2' className='flex-grow-1 ml-2' defaultValue={pstate} onChange={inputHandler} required></input>
      </div>
      <div className='d-flex p-3'>
        <label htmlFor='pname' className='w-25'>
          Zip Code
        </label>
        <input id='pzipcode' type='number' pattern='[0-9]{6}' maxLength='6' className='flex-grow-1 ml-2' defaultValue={pzipcode} onChange={inputHandler} required></input>
      </div>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default PersonalInfo;
