import './App.css'
import { EncounterList } from './components/pages/EncounterList';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Profile } from './components/pages/Profile';
import { Register } from './components/pages/Register';
import { RegisterEncounter } from './components/pages/RegisterEncounter';
import { Search } from './components/pages/Search';

function App() {

  return (
    <>
      <h1>WILD ENCOUNTERS</h1>
      <Home/>
      <Login/>
      <Register/>
      <Profile/>
      <RegisterEncounter/>
      <EncounterList/>
      <Search/>
    </>
  )
}

export default App
