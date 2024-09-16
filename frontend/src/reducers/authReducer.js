const initialState = {
  isAuthenticated: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS': // Maneja tanto login como registro
      // Guardar el token en localStorage cuando el login o registro sea exitoso
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case 'LOGOUT':
      // Eliminar el token de localStorage cuando el usuario cierre sesión
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
