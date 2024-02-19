import React from "react";
import useForm from "../hooks/useForm";
import FormInput from "./FormInput";
import '../estilos/estiloForm.css';

function Formulario() {
  const sendForm = (values) => {
    console.log(values); // Aquí manejarías el envío del formulario, por ejemplo, imprimiendo los datos en consola
    alert(`Valores del formulario: ${JSON.stringify(values)}`);
  };

  const { values, handleChange, handleSubmit } = useForm(sendForm);

  return (
    <form onSubmit={handleSubmit} className="formularioRegistro">
      <h1 className="titleForm">Registro de productos</h1>
      <div className="formCuerpo">
        <FormInput label="Ingresa nombre del producto" type="text" name="nombre" onChange={handleChange} required="true" />
        <FormInput label="Ingresa nombre de marca" type="text" name="marca" onChange={handleChange} required="true" />
        <FormInput label="Ingresa el modelo" type="text" name="modelo" onChange={handleChange} required="true" />
        <FormInput label="Ingresa la desecripcion" type="text" name="descripcion" onChange={handleChange} required="true" />
        <FormInput label="Ingresa la Categoria" type="text" name="categoria" onChange={handleChange} required="true" className="columAmpliada" />
        <button type="submit" className="botonEnviar">Enviar</button>
      </div>
    </form>
  );
}
export default Formulario;