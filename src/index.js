import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar.js';
import Title from './components/title.js';
import Browse from './components/browse.js';
import Footer from './components/footer.js';



const store = configureStore();

store.subscribe(() => {
    console.log('index: ', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/browse" component={Browse} />
                    <Route path="/" component={Title} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
        , document.querySelector('.container'));
