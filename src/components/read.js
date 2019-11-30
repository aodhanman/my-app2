import React from 'react';
import Books from './books';
import axios from 'axios';
    class Read extends React.Component {
        state = {
            books: []
        };
    
        componentDidMount() {
            axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
            .then((response)=>{
                this.setState({books: response.data.Search})
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    
        render(){
            return(
                <div>
                    <h1>Hello from Read Component</h1>
                    <Books myBooks={this.state.books}></Books>
                </div>
            );
    }
}
export default Read;