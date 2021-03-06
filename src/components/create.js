import React from 'react';
import axios from 'axios';

class Create extends React.Component {

  constructor() {
    super();
    this.onChangeBookName = this.onChangeBookName.bind(this);

    this.onChangeBookYear = this.onChangeBookYear.bind(this);
    this.onChangeBookPoster = this.onChangeBookPoster.bind(this);
    this.onChangeBookRating = this.onChangeBookRating.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Title: '',
      Year: '',
      Rating: '',
      Poster: ''
    }
  }
  onChangeBookName(e) {
    this.setState({
      Title: e.target.value
    });
  }
  onChangeBookYear(e) {
    this.setState({
      Year: e.target.value
    });
  }
  onChangeBookPoster(e) {
    this.setState({
      Poster: e.target.value
    });
  }onChangeBookRating(e) {
    this.setState({
      Rating: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    
    const newBook = {
      title: this.state.Title,
      year: this.state.Year,
      rating: this.state.Rating,

      poster: this.state.Poster

    };

      axios.post('http://localhost:4000/api/books', newBook) 
      .then()
      .catch(console.log("Error"));

    this.setState({
      Title: '',
      Year: '',
      Rating: '',
      Poster: ''
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Create </h2>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Book Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.Title}
              onChange={this.onChangeBookName}
            />
          </div>
          <div className="form-group">
            <label>Add Release Year: </label>
            <input 
              type="text"
              className="form-control"
              value={this.state.Year}
              onChange={this.onChangeBookYear}
            />
          </div>
          <div className="form-group">
            <label>Add Rating : </label>
            <select id="rating" name="rating" value={this.state.value} onChange={this.handleGameRatingChange}>
                                <option value='1' className='form-control'>1</option>
                                <option value='2' className='form-control'>2</option>
                                <option value='3' className='form-control'>3</option>
                                <option value='4' className='form-control'>4</option>
                                <option value='5' className='form-control'>5</option>
                            </select>
          </div>
          <div className="form-group">
            <label>Add Poster Url: </label>
            <input type="text"
              className="form-control"
              value={this.state.Poster}
              onChange={this.onChangeBookPoster}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Book" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
export default Create;