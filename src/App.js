import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './Components/info';
import CardList from './Components/CardList';
import './Styles/01.scss';

export default function App() {

  return(
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CardList} />
          <Route path="/sobre/:id" component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
  )
} 