import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <h1 className="text-3xl">Theater Laak</h1>
      <p>Welkom op de website van Theater Laak. Deze website is momenteel onder constructie.</p>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />

      }
    </div>
  );
}

export default App;
