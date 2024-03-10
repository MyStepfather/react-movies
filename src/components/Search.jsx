import React, {Component, createRef as ref} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.query = ref();
        this.state = {
            filter: ''
        };
    }

    handleCheckRadio = (event) => {
        this.setState({filter: event.target.dataset.type})
    };

    render() {
        const {searchFn} = this.props;
        return (
            <div className="search">
                <div className="search__input">
                    <input
                        ref={this.query}
                        placeholder="Введите название фильма"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                searchFn('s', this.query.current.value, this.state.filter)
                            }
                        }}
                    />
                    <button className="btn search__btn" onClick={() => {
                        searchFn('s', this.query.current.value, this.state.filter)
                    }}>
                        Поиск
                    </button>
                </div>
                <div className="search__filters">
                    <label>
                        <input className="with-gap" type="radio" data-type=""
                               onChange={this.handleCheckRadio} checked={!this.state.filter}/>
                        <span>Все</span>
                    </label>
                    <label>
                        <input className="with-gap" type="radio" data-type="movie"
                               onChange={this.handleCheckRadio} checked={this.state.filter === 'movie'}/>
                        <span>Фильмы</span>
                    </label>
                    <label>
                        <input className="with-gap" type="radio" data-type="series"
                               onChange={this.handleCheckRadio} checked={this.state.filter === 'series'}/>
                        <span>Сериалы</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;