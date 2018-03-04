import React from 'react'
import ActiveCards from '../containers/ActiveCards'
import Stats from '../containers/Stats'
import Deck from '../containers/Deck'

const App = () => (
    <div id="game">
        <Stats/>
        <ActiveCards/>
        <Deck/>
    </div>
);

export default App
