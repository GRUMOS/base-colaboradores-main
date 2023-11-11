import { useState } from 'react'
import './App.css'
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { colaboradores } from './colaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [nuevosColaboradores, setNuevosColaboradores] = useState([]);


  return (
    <>
<div>
  <Alert />
  <Buscador />
</div>
<section className="container">
  <div className="row">
    <div className="col-md-8 order-md-1">
      <h2>Lista de colaboradores</h2>
      <Listado colaboradores={[...colaboradores,...nuevosColaboradores]} />
    </div>
    <div className="col-md-4 order-md-2">
      <h2>Agregar colaborador</h2>
      <Formulario setNuevosColaboradores={setNuevosColaboradores} />
    </div>
  </div>
</section>
      
</>
  );
}

export default App;
