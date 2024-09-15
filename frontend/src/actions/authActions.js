export const loginUser = (username, password) => async (dispatch) => {
  const response = await fetch('http://localhost:4000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (data.status === 'ok') {
    localStorage.setItem('token', data.token);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { token: data.token },
    });
  } else {
    alert(data.error);
  }
};
