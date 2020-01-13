import React from 'react';
import MovieForm from './MovieForm';
import StyledMovieList from './MovieList';
import ky from 'ky';

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], showForm: true, checkboxGroup: [ false, false, false, false ]};
  }


  handleCheckbox = (event) => {
    const index = parseInt(event.target.value, 10);
    //const checkboxes = [ ...checkboxGroup ];
    //checkboxes[event.target.value] = event.target.checked;
    this.setState({ checkboxGroup: [...this.state.checkboxGroup.slice(0, index),
    event.target.checked, ...this.state.checkboxGroup.slice(index + 1)] });
  }


  handleForm = () => {
    // handler code for a submitted MovieForm
    for (let i = 0; i < this.state.checkboxGroup.length; i++) {
      (async () => {
        try {
          // Make an API Request and store the Response
          await ky.patch(`http://10.21.75.38:3004/movies/${i}`, {
            json: { "checked": this.state.checkboxGroup[i] }
          });
          if (i === this.state.checkboxGroup.length - 1) this.setState({ showForm: false });
        } catch (error) {
          // This is for Networking Errors
          console.log('API Error: ' + error);
        }
      })();
    }
  }


  componentDidMount() {
    (async () => {
      try {
        // Make an API Request and store the Response
        const response = await ky('http://10.21.75.38:3004/movies').json();
        this.setState({ movies: response });
      } catch (error) {
        console.log('API Error: ' + error);
      }
    })();
  }

  componentDidUpdate( prevProps, prevState ) {
    if (this.state.showForm !== prevState.showForm) {
      (async () => {
        try {
          // Make an API Request and store the Response
          const response = await ky('http://10.21.75.38:3004/movies').json();
          this.setState({ movies: response });
        } catch (error) {
          console.log('API Error: ' + error);
        }
      })();
    }
  }

  render() {
  
    if (this.state.showForm) return (
      <MovieForm
        checkboxGroup={this.state.checkboxGroup}
        movies={this.state.movies}
        handleCheckboxCallback={this.handleCheckbox}
        handleFormCallback={this.handleForm}
      />
    );
    else return <StyledMovieList movies={this.state.movies} />
    }
};

export default AppClass;
