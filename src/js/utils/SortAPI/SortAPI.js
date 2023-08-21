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
}
