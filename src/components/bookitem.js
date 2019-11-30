import React from 'react';
import Card from 'react-bootstrap/Card';
class BookItem extends React.Component{

    render(){
        return(
            <div>
                
                <Card>
                <Card.Header>{this.props.book.Title}</Card.Header>
                <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>{this.props.book.Year}</p>
                <p>{"Rating " + this.props.book.Rating}</p>
                <img src={this.props.book.Poster} alt="Error"></img>
                
               
                
                </blockquote>
                </Card.Body>
</Card>
            </div>

                            // added error message if image isn't reachable

        )
    }
}
export default BookItem;