const getIsAuthenticated = state => state.auth.token;
const getUserName = state => state.auth.user.name;

const selectors = {
  getIsAuthenticated,
  getUserName,
};

export default selectors;
