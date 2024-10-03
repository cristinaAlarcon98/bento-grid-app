import React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent.component.tsx';
import SecondComponent from './components/SecondComponent.tsx';
import ThirdComponent from './components/ThirdComponent.tsx';
import FourthComponent from './components/FourthComponent.tsx';


const App:React.FC = () => {
  return (
    <div style={{height: 'calc(100vh - 30px)', display:'flex', flexDirection:'column'}} >
      <div style={{display:'flex', flexWrap: 'wrap',alignItems:'flex-start'}}>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      </div>
      <div style={{display:'flex',flexDirection: 'row'}}>
      <FourthComponent></FourthComponent>
      </div>
    </div>
  );
}

export default App;
