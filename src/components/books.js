import React from 'react';
import BookItem from './bookitem';

class Books extends React.Component{

    render(){
        return this.props.myBooks.map((book)=>{
            console.log({book});
            return <BookItem key={book.serial} book={book}></BookItem>

            
        });
    }
}
export default Books;