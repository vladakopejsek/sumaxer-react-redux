import React from 'react'
import ActiveCards from '../containers/ActiveCards'
import Stats from '../containers/Stats'
import Deck from '../containers/Deck'

const App = () => (
    <div id="game">
        <ActiveCards/>
        <section id="board">
            <Stats/>
            <Deck/>
        </section>
    </div>
);

export default App
