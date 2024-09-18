// Importa los tipos de acción desde tu archivo types.js
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';

// Acción para manejar el inicio de sesión (login)
export const loginUser = (username, password) => async (dispatch) => {
  try {
    // Solicitud al backend para iniciar sesión
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    // Si la autenticación es exitosa
    if (data.status === 'ok') {
      // Guardar el token en el localStorage
      localStorage.setItem('token', data.token);

      // Despachar la acción LOGIN_SUCCESS
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: data.token, user: data.user }, // Puedes incluir más información del usuario si el backend lo proporciona
      });
    } else {
      // Despachar la acción LOGIN_FAILURE si ocurre un error en la autenticación
      dispatch({
        type: LOGIN_FAILURE,
        payload: data.error || 'Error en el inicio de sesión',
      });

      // Opcional: Mostrar un mensaje de error al usuario
      alert(data.error);
    }
  } catch (error) {
    // Despachar la acción LOGIN_FAILURE si ocurre un error en la solicitud
    dispatch({
      type: LOGIN_FAILURE,
      payload: 'Error en el servidor. Intente de nuevo más tarde.',
    });

    // Mostrar una alerta para los errores de servidor
    alert('Error en el servidor. Intente de nuevo más tarde.');
  }
};

// Otras acciones como el registro o logout se pueden añadir aquí en el futuro

