import { useState } from 'react';
import './App.css';
import BussinessInfo from './components/BussinessInfo';
import PersonalInfo from './components/PersonalInfo';
import ReviewInfo from './components/ReviewInfo';

function App() {
  const [store, setStore] = useState({
    PersonalInfo: {},
    BussinessInfo: {},
    DebitCardInfo: {},
  });
  const [stage, setStage] = useState(0);

  const updateStore = (type, value) => {
    setStore({ ...store, [type]: value });
    setStage(stage + 1);
    console.log('store => ', store);
  };

  const goBack = () => {
    setStage(stage - 1);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return <PersonalInfo {...{ updateStore, store, compkey: 'PersonalInfo' }} />;
      case 1:
        return <BussinessInfo {...{ updateStore, store, goBack, compkey: 'BussinessInfo' }} />;
      case 2:
        return <ReviewInfo {...{ updateStore, store, goBack, compkey: 'DebitCardInfo' }} />;
    }
  };
  return <div className='App'>{renderSwitch(stage)}</div>;
}

export default App;
