import React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent.component.tsx';
import SecondComponent from './components/SecondComponent.tsx';


const App:React.FC = () => {
  return (
    <div style={{height: 'calc(100vh - 30px)'}}>
      <div style={{display:'flex',flexDirection: 'row'}}>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      </div>
      

    </div>
  );
}

export default App;
