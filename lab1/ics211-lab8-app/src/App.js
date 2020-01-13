import React from 'react';
import MovieForm from './MovieForm';
import StyledMovieList from './MovieList';
import ky from 'ky';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
   // state var and function that updates it
  const [movies, setMovies] = React.useState([]);
  // useState hook for conditional rendering the form
  const [ showForm, setShowForm ] =
    React.useState( true );
  // useState hook to store state of checkboxes in array
  const [ checkboxGroup, setCheckboxGroup ] =
    React.useState( [ false, false, false, false ] );
  
  
  const handleCheckbox = (event) => {
    const index = parseInt(event.target.value, 10);
    //const checkboxes = [ ...checkboxGroup ];
    //checkboxes[event.target.value] = event.target.checked;
    setCheckboxGroup( [ ...checkboxGroup.slice(0, index),
      event.target.checked, ...checkboxGroup.slice(index + 1) ] );
  }


  const handleForm = () => {
    // handler code for a submitted MovieForm
    for (let i = 0; i < checkboxGroup.length; i++) {  
      (async () => {
        try {
          // Make an API Request and store the Response
          await ky.patch(`http://10.21.75.38:3004/movies/${i}`, {
            json: { "checked": checkboxGroup[i] }
          });
          if ( i === checkboxGroup.length - 1 ) setShowForm( false );
        } catch (error) {
          // This is for Networking Errors
          console.log('API Error: ' + error);
        }
      })();
    }
  }


  React.useEffect( () => {
    (async () => {
      try {
        // Make an API Request and store the Response
        const response = await ky('http://10.21.75.38:3004/movies').json();
        setMovies(response);
      } catch (error) {
        console.log('API Error: ' + error);
      }
    })();
  },[showForm]);


  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={ () => {
            setShowForm(true);
            return (
              <MovieForm
                checkboxGroup={checkboxGroup}
                movies={movies}
                handleCheckboxCallback={handleCheckbox}
                handleFormCallback={handleForm}
              />
            );
          }}
        />
        <Route path="/results">
          <StyledMovieList movies={movies} />
        </Route>
      </Switch>
    </Router>
    
  );
};

export default App;
