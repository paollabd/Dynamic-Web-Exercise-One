import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Article from './components/Article';
import ArticlePage from './containers/ArticlePage';


function App() {

    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={ArticlePage} />
                <Route exact path="/article/:id" component={Article} />
            </Router>
        </div>
    );
}

export default App;