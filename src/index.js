// React Required
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { auth } from './firebase/firebaseConfig';
// Create Import File
import './index.scss';
// Common Layout
// import Layout from "./component/common/App";
// Home layout
import Home from './home/Home';
import error404 from "./elements/error404";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const Root = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])
    return(
        <BrowserRouter basename={'/'}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`}><Home user={user}/></Route>                    
                <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                <Route component={error404}/>
            </Switch>
        </BrowserRouter>
    )
}
serviceWorker.register();
ReactDOM.render(<Root/>, document.getElementById('root'));