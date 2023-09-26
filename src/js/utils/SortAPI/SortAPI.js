import { isUnique } from './isUnique';

export class SortAPI {
  static sortMovieByRating = movies => {
    return movies
      ?.filter(item => item.title || item.name)
      .sort((a, b) => b.vote_average - a.vote_average);
  };

  static sortMovieByVoteCount = movies => {
    return movies
      ?.filter(item => item.title || item.name)
      .sort((a, b) => b.vote_count - a.vote_count);
  };

  static sortMovieByAdult = movies => {
    return movies
      ?.filter(item => item.title || item.name)
      .filter(item => item.adult);
  };
  static sortMovieByGenres = (genres = [], movies = []) => {
    if (genres?.length === 0) {
      return movies;
    }
    const genresArr = genres?.split(',');
    const sortedArr = [];

    for (const i in movies) {
      for (const y in genresArr) {
        if (
          movies[i].genre_ids.includes(Number(genresArr[y])) &&
          isUnique(sortedArr, movies[i].id)
        ) {
          sortedArr.push(movies[i]);
        }
      }
    }

    return sortedArr;
  };
}
