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
                    <Card.Header>{BookItem.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{BookItem.Year}</p>
                            <p>{"Rating " + BookItem.Rating}</p>
                            <img src={BookItem.Poster} alt="Error"></img>



                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
export default BookItem;