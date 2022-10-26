
import './App.css';
import MensajeModule from '../src/Mensaje.js'
const OtherComponent = () =>{
  return <h1>Estoy tratando de crear otro componente en React</h1>
}


function App() {
  const mensaje = "hola emma, desde variable"
  const a = 2
  const b = 3
  
  return (
    <div className="App">
       {mensaje + ' concatenacion '}
      <h1> Titulo de la App </h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es :</p>
        {a + b}
      
      </div>
      <OtherComponent />
      <MensajeModule color='red' message="Probando Props"/>
      <MensajeModule color='green' message="Y pueden ser"/>
      <MensajeModule color='blue' message="Reutilizables"/>
     
    </div>
  );
}

export default App;
