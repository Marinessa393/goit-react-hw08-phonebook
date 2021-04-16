import { Route, Switch } from 'react-router-dom';
import { ContactsView } from '../views/ContactsView';
import { MainPageView } from '../views/MainPageView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import { AppBar } from '../components/AppBar';
// import './App.css';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={MainPageView} />
        <Route exact path="/register" component={RegisterView} />
        <Route exact path="/login" component={LoginView} />
        <Route exact psth="/contacts" component={ContactsView} />
      </Switch>
    </>
  );
};

export default App;
