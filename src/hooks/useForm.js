import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log("FORMULARIO ACTUALIZADO: ", values);
  }, [values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values); // Pasamos los valores al callback
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues(values => ({
      ...values,
      [name]: value,
    }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;