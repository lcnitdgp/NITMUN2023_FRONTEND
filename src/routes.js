import React ,{ Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './components/Home/home';
import HubEvents from './components/Events/hubEvents';

const Register = lazy(() => import('./components/Register/Register'));
const TeamPage = lazy(() => import('./components/Team/teamPage'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));

const Routes = () => {
    return (
        <Suspense fallback={<div className="lds-wrapper"><div className="lds-ripple"><div></div><div></div></div></div>}>
            <Switch>
              <Route path="/events/:hubId" component={HubEvents} />
              <Route path="/register" exact render={() => <Register />} />
              <Route path="/team" exact render={() => <TeamPage />} />
              <Route path="/gallery" exact render={() => <Gallery />} />
              <Route path="/" exact component={Home} />
            </Switch>
        </Suspense>
    )
}

export default Routes;
