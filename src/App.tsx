import React from 'react';
import './App.sass';
import {Navigation} from "./components/navigation/Navigation";
import {Content} from "./components/content/Content";

export const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Content/>
        </div>
    );
}
