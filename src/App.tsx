import React from 'react';
import './styles.css'



import FirstComponent from './FirstComponent.component.tsx';
import SecondComponent from './SecondComponent.tsx';
import ThirdComponent from './ThirdComponent.tsx';
import FourthComponent from './FourthComponent.tsx';
import FifthComponent from './FifthComponent.tsx';
import SixthComponent from './SixthComponent.tsx';
import SeventhComponent from './SeventhComponent.tsx';
import EightComponent from './EightComponent.tsx';


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
