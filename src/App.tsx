import React from 'react';
import './styles/styles.css'



import FirstComponent from './components/FirstComponent.component.tsx';
import SecondComponent from './components/SecondComponent.component.tsx';
import ThirdComponent from './components/ThirdComponent.component.tsx';
import FifthComponent from './components/FifthComponent.component.tsx';
import SixthComponent from './components/SixthComponent.component.tsx';
import SeventhComponent from './components/SeventhComponent.component.tsx';
import EightComponent from './components/EightComponent.component.tsx';
import FourthComponent from './components/FourthComponent.component.tsx';


const App:React.FC = () => {
  return (
    <div className='app-grid'>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
      <SixthComponent></SixthComponent>
      <SeventhComponent></SeventhComponent>
      <EightComponent></EightComponent>
    </div>
  );
}

export default App;
