import './App.css'
import GeneralInformation from './GeneralInformation';

const generalInformation = {
  name: 'Vex Ave',
  email: 'notreal@mail.com',
  phone: '0123456789',
};

function App() {
  return <>
    <GeneralInformation generalInformation={generalInformation} />
  </>;
}

export default App
