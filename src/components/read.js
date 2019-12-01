import React from 'react';
import Books from './books';
import '../App.css';
import axios from 'axios';
    class Read extends React.Component {
        //array of books
        state = {
            books: []
        };
    
        componentDidMount() {
            axios.get('http://localhost:4000/api/books')
            .then((response)=>{
                this.setState({books: response.data.books})
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