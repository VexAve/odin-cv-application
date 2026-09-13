import '../styles/App.css'
import type { EventObject } from '../types';
import GeneralInformationSection from './GeneralInformationSection';
import { useState } from 'react';
import { useImmer } from 'use-immer';

const generalInformationInitial = {
  name: 'Vex Ave',
  email: 'notreal@mail.com',
  phone: '0123456789',
};

function App() {
  const [generalInformation, updateGeneralInformation] = useImmer(generalInformationInitial);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e: EventObject, key: string) {
    updateGeneralInformation(draft => {
      draft[key as keyof typeof draft] = e.target.value;
    })
  }

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return <>
    <GeneralInformationSection
      generalInformation={generalInformation}
      isEditing={isEditing}
      onChange={handleChange}
      onClick={handleClick}
    />
  </>;
}

export default App
