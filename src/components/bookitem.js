import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
import axios from 'axios';

class BookItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.books.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{this.props.books.Year}</p>
                            <p>{"Rating " + this.props.book.Rating}</p>
                            <img src={this.props.book.Poster} alt="Error"></img>



                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
export default BookItem;