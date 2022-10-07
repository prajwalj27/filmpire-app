import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '..';

function MovieList({ data }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.moviesContainer}>
        {data.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </div>
  );
}

export default MovieList;
