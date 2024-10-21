import React from 'react';
import './styles.css'



import FirstComponent from './FirstComponent.component.tsx';
import SecondComponent from './SecondComponent.component.tsx';
import ThirdComponent from './ThirdComponent.component.tsx';
import FifthComponent from './FifthComponent.component.tsx';
import SixthComponent from './SixthComponent.component.tsx';
import SeventhComponent from './SeventhComponent.component.tsx';
import EightComponent from './EightComponent.component.tsx';
import FourthComponent from './FourthComponent.component.tsx';


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
