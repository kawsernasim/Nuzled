import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));