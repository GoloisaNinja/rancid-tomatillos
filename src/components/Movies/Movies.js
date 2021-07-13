import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import FeatMovie from '../FeatMovie/FeatMovie';
import './Movies.css';
import MovieDetails from '../MovieDetails/MovieDetails';

class Movies extends Component {

  getMovieCards = () => {
    const { movies } = this.props;
    return movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          releaseDate={movie.release_date}
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
      );
    });
  };

  render() {
    return (
      <section>
        {!this.props.selectedMovie ? (
          <div>
            <FeatMovie props={this.props} updateSelectedMovie={this.props.updateSelectedMovie} />
            <div className='movies-container'>{this.getMovieCards()}</div>
          </div>
        ) : (
          <MovieDetails selectedMovie={this.props.selectedMovie} />
        )}
      </section>
    );
  }
}

export default Movies;
