import React from 'react';
import { StyledForm } from './Styled';
import { useHistory } from 'react-router-dom';

const MovieForm = ({ movies, checkboxGroup, handleCheckboxCallback, handleFormCallback }) => {

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    (async () => {
      try {
        await handleFormCallback();
        history.push('/results');
      } catch (error) {
        console.log(error);
      }
    })();
  }

  let enableSubmit = false;
  for (const checked of checkboxGroup) {
    if (checked) enableSubmit = true;
  }
  
  return(
    <StyledForm>
      <legend>Select which movies you like:</legend>
      <fieldset>
        { movies.map((movie,index) => (
          <React.Fragment key={movie.id}>
            <label>
              <input type="checkbox" name="checkboxGroup" value={index}
                checked={checkboxGroup[index]}
                onChange={handleCheckboxCallback} />
              &nbsp;{movie.name}
            </label>
            <br /><br />
          </React.Fragment>
        ))}
        {enableSubmit ? (
          <input type='button' value='Submit' onClick={handleSubmit} />
        ) : (
          <input type='button' value='Submit' disabled />
        )}
      </fieldset>
    </StyledForm>
  );
}

export default MovieForm;
