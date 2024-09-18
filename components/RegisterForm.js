// components/RegisterForm.js
import React from 'react';
import { useForm } from 'react-hook-form'; // React Hook Form for form handling
import { yupResolver } from '@hookform/resolvers/yup'; // Resolver to connect Yup with React Hook Form
import * as yup from 'yup'; // Yup for schema validation

// Esquema de validación usando Yup
const schema = yup.object().shape({
  username: yup
    .string()
    .required('El nombre de usuario es obligatorio')
    .matches(/^[a-zA-Z0-9_]+$/, 'Solo letras, números y guiones bajos')
    .min(3, 'Mínimo 3 caracteres')
    .max(20, 'Máximo 20 caracteres'),
  
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'Mínimo 8 caracteres')
    .matches(/[a-z]/, 'Debe tener al menos una letra minúscula')
    .matches(/[A-Z]/, 'Debe tener al menos una letra mayúscula')
    .matches(/[0-9]/, 'Debe tener al menos un número')
    .matches(/[@$!%*?&#]/, 'Debe tener al menos un carácter especial (@$!%*?&#)'),
});

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Validación con Yup
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Nombre de usuario"
          {...register('username')}
        />
        <p style={{ color: 'red' }}>{errors.username?.message}</p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Contraseña"
          {...register('password')}
        />
        <p style={{ color: 'red' }}>{errors.password?.message}</p>
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;

