import './App.css';
import Form from './components/Form';

function App() {
  const passengers = [ 
    {
      title: "Passenger 1"
    },
   {
      title: "Passenger 2"
    }
  ]
  return (
    <div className="App">
      <Form passenger={"Passenger 1"} />
      <Form passenger={"Passenger 2"} />
    </div>
  );
}

export default App;
