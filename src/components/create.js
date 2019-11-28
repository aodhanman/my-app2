import React from 'react';

class Create extends React.Component {

  constructor() {
    super();
    this.onChangeMovieName = this.onChangeMovieName.bind(this);

    this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
    this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    }
  }
  onChangeMovieName(e) {
    this.setState({
      Title: e.target.value
    });
  }
  onChangeMovieYear(e) {
    this.setState({
      Year: e.target.value
    })
  }
  onChangeMoviePoster(e) {
    this.setState({
      Poster: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`button clicked
      ${this.state.Title},
      ${this.state.Year},
      ${this.state.Poster}`);
    this.setState({
      Title: '',
      Year: '',
      Poster: ''
    })
  }
  render() {
    return (
      <div className="App">
        <h2>This is the Create component.</h2>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Movie Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.Title}
              onChange={this.onChangeMovieName}
            />
          </div>
          <div className="form-group">
            <label>Add Release Year: </label>
            <input type="text"
              className="form-control"
              value={this.state.Year}
              onChange={this.onChangeMovieYear}
            />
          </div>
          <div className="form-group">
            <label>Add Poster Url: </label>
            <input type="text"
              className="form-control"
              value={this.state.Poster}
              onChange={this.onChangeMoviePoster}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Movie" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
export default Create;