import React from 'react';
import { Route,Switch} from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import NoMatch from '../Pages/NoMatch'


const Routes = () => {
    return (
        <>    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route excat path="/NoMatch"component={NoMatch} /> 
             </Switch>
        </>
    );
};

export default Routes;
