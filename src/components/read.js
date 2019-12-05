import React from 'react';
import Books from './books';
import '../App.css';
import axios from 'axios';
    class Read extends React.Component {
        //array of books
        state = {
            books: [/*{
                "Title": "A Clockwork Orange",
                "Year": "1963",
                "serial": "tt4154756",
                "Type": "book",
                "Rating": "5",
                "Poster": "https://secure.i.telegraph.co.uk/multimedia/archive/03266/book-clockwork_3266689k.jpg"
                },
                {
                "Title": "Catcher in the Rye",
                "Year": "1951",
                "serial": "tt3498820",
                "Type": "book",
                "Rating": "5",
                "Poster": "https://secure.i.telegraph.co.uk/multimedia/archive/03266/book-catcher_3266686k.jpg"
                },
                {
                "Title": "Brave New World",
                "Year": "1962",
                "Type": "book",
                "Rating": "5",
                "Poster": "https://secure.i.telegraph.co.uk/multimedia/archive/03266/book-brave_3266684k.jpg"
                },
                {
                "Title": "To Kill A Mockingbird",
                "Year": "1960",
                "Type": "book",
                "Rating": "5",
                "Poster": "https://secure.i.telegraph.co.uk/multimedia/archive/03266/book-kill_3266682k.jpg"
                }*/
            ]
        };
    
        componentDidMount() {
            axios.get('http://localhost:4000/api/books')
            .then((response)=>{
                this.setState({books: response.data.books})
                console.log(this.state.books);

            })
            .catch((error)=>{
                console.log(error);
            });
        }
    
        render(){
            return(
                <div>
                    <h1>Reading list</h1>

                    <ul id="ListParent">
                        <Books myBooks={this.state.books}></Books>

                    </ul>
                </div>
            );
    }
}
export default Read;