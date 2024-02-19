import React from "react";
import useForm from "../hooks/useForm";
import FormInput from "./FormInput";
import '../estilos/estiloForm.css';


function FormularioRegistro() {
  const sendForm = (values) => {
    console.log(values); // Aquí manejarías el envío del formulario, por ejemplo, imprimiendo los datos en consola
    alert(`Valores del formulario: ${JSON.stringify(values)}`);
  };

  const { values, handleChange, handleSubmit } = useForm(sendForm);

  return (
    <form onSubmit={handleSubmit} className="formularioRegistro">
      <h1 className="titleForm">Datos de registro</h1>
      <div className="formCuerpo">
      <FormInput label="Ingresa tu nombre" type="text" name="nombre" onChange={handleChange} required="true" />
      <FormInput label="Ingresa tu apellido" type="text" name="apellido" onChange={handleChange} required="true" />
      <FormInput label="Ingresa tu DNI" type="number" name="DNI" onChange={handleChange} required="true" />
      <FormInput label="Ingresa tu número de teléfono" type="text" name="telefono" onChange={handleChange} required="true" />
      <FormInput label="ejemplo@correo.com" type="email" name="email" onChange={handleChange} required="true" className="columAmpliada"/>
      <button type="submit" className="botonEnviar">Enviar</button>
      </div>
    </form>
  );

};

export default FormularioRegistro;
