import '../styles/App.css'
import type { EventObject } from '../types';
import GeneralInformationSection from './GeneralInformationSection';
import { useImmer } from 'use-immer';

const generalInformationInitial = {
  name: 'Vex Ave',
  email: 'notreal@mail.com',
  phone: '0123456789',
};

function App() {
  const [generalInformation, updateGeneralInformation] = useImmer(generalInformationInitial);

  function handleChange(e: EventObject, key: string) {
    updateGeneralInformation(draft => {
      draft[key as keyof typeof draft] = e.target.value;
    })
  }

  return <>
    <GeneralInformationSection generalInformation={generalInformation} isEditing={true} onChange={handleChange} />
  </>;
}

export default App
