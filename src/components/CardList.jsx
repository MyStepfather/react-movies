import React, {Component} from 'react';
import Card from "./Card";
import Preloader from "./Preloader";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const {loading, cards} = this.props;
        return (
            <div className="card-list">
                {loading
                    ? <Preloader/>
                    : cards.map(card => <Card key={card.imdbID} card={card}/>)}
            </div>
        );
    }
}

export default CardList;