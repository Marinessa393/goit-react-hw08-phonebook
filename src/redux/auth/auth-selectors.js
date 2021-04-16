const getIsAuthentificated = state => state.auth.token;
const getUserName = state => state.auth.user.name;

const selectors = {
  getIsAuthentificated,
  getUserName,
};

export default selectors;
