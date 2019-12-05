import React from 'react';
import axios from 'axios';
import BookItem from './bookitem';
import '../App.css';



class Delete extends React.Component {

  constructor() {
    super();
    this.DeleteBook = this.DeleteBook.bind(this);
  }

  DeleteBook(e) {
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/books/" + this.props.books._id)
      .then()
      .catch();

  }

  render() {
    return (
      <div className="App">
      <h2>Delete </h2>

      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Delete Book Name: </label>
          <input type="text"
            className="form-control"
            value={this.state.Title}
            onChange={this.DeleteBook}
          />
        </div>
        
       
        
        <div className="form-group">
          <input type="submit" value="Delete Book" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
export default BookItem;