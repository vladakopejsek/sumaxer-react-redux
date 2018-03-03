import shuffle from 'shuffle-array'

class Model {
    constructor() {
        this.turnsLeft = 12;
        this.selectionLeft = 4;
        this.score = 0;
        this.activeCards = [];
        this.cardsOnDeck = [];
        this.fill();
    }

    fill() {
        for(let i = 1; i < 16; i++) {
            let card = {number: i, isTurned: false};
            this.cardsOnDeck.push(card);
            this.cardsOnDeck = shuffle(this.cardsOnDeck);
        }
    }
}

function remove(array, toDelete) {
    let newarr = new Array();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === toDelete) {
            array[i] = array[i + 1];
            array[i + 1] = null;
        }
        if (array[i]) {
            newarr.push(array[i]);
        }
    }
    return newarr
}

const exp = {
    Model,
    remove
};

export default exp