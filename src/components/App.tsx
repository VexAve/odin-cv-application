import '../styles/App.css'
import GeneralInformationSection from './GeneralInformationSection';

const generalInformation = {
  name: 'Vex Ave',
  email: 'notreal@mail.com',
  phone: '0123456789',
};

function App() {
  return <>
    <GeneralInformationSection generalInformation={generalInformation} isEditing={true} />
  </>;
}

export default App
