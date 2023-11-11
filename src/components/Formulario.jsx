
import React, { useState } from 'react';
import Alert from './Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Formulario() {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [agregarColaborador, setAgregarColaborador] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    
    const validarDatos = (e) => {
        e.preventDefault();
  
        if (id === '' || nombre === '' || correo === '' || edad === ''|| cargo === ''|| telefono === '') {
            setError(true);
            setErrorMessage("Completa todos los campos!")
            return;
        }
        
        
      setError(false);
      setErrorMessage("Registro satisfactorio");
      setId('');
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
    };
    
    return (
      <>
        <form className="formulario" onSubmit={validarDatos}>
          <div className="form-group">
            <input
              type="number"
              name="id"
              className="form-control"
              placeholder="Id"
              onChange={(e) => setId(e.target.value)}
              value={id}
              />
          </div>
          <div className="form-group">
            <input
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              />
          </div>
          <div className="form-group">
            <input
              name="correo"
              className="form-control"
              placeholder="Correo"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
              />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="edad"
              className="form-control"
              placeholder="Edad"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
            />
          </div>
          <div className="form-group">
            <input
              name="cargo"
              className="form-control"
              placeholder="Cargo"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="telefono"
              className="form-control"
              placeholder="Telefono"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div>
          {errorMessage && <Alert message= {errorMessage} isError={error}></Alert>}
          <button type="submit" className="btn btn-success btn-lg btn-block">
            Agregar colaborador
          </button>
        </form>
      </>
    );
  }


