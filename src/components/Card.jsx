import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const {card} = this.props;
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={card.Poster}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{card.Title}</span>
                    <p><a href="!#">{card.Type}</a></p>
                </div>
            </div>
        );
    }
}

export default Card;