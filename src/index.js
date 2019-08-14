import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Timer from './components/timer';
import Period from './components/period';
import Music from './components/music';
import Score from './components/score';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return (
            <div>
                <Timer start="t" />
                <Period addPeriod="[" removePeriod="]" />
                <Score
                    teamNameA="TIME Alefy"
                    teamNameB="TIME DANIEL"
                    addA="a"
                    removeA="s"
                    addB="k"
                    removeB="l"
                />
                <Music />
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
