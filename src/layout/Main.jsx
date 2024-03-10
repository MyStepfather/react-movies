import React, {Component} from 'react';
import CardList from "../components/CardList";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends Component {
    state = {
        isLoading: false,
        cardsList: [],
    }
    getFilms = (q, query, filter='') => {
        this.setState({isLoading: true});
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&${q}=${query}&type=${filter}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True" && data.Search.length) {
                    this.setState({cardsList: data.Search});
                }
            })
            .finally(() => this.setState({isLoading: false}));
    };
    componentDidMount() {
        this.getFilms('s', 'Pokemon');
    }

    render() {
        const {isLoading, cardsList} = this.state;
        return (
            <main className="container content">
                <Search searchFn={this.getFilms} />
                <CardList loading={isLoading} cards={cardsList}/>
            </main>
        );
    }
}

export default Main;