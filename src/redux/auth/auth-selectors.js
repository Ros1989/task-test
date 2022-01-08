// будем проверять состояние логина пользователя по токену
// если токен есть, туда прийдет какая-то строка, так как она не пустая приведется к true
const getIsAuthenticated = state => Boolean(state.auth.token);
const getUsername = state => state.auth.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUsername,
};
