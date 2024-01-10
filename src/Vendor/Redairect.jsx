import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Itinerary from './Itinerary';

function Redairect(props) {
    return (
        <>
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={MyComponent} /> */}
                    <Route path="/itinerary"  element={<Itinerary/>}/>
                </Switch>
            </Router>   
        </>
    );
}

export default Redairect;