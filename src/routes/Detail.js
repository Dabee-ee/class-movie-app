import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie-detail">
          <div className="movie-description">
            <img
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <div className="movie__data">
              <h3 className="movie__title">{location.state.title}</h3>
              <h4 className="movie__year">{location.state.year}</h4>
              <ul className="movie__genres">
                {location.state.genres.map((genre, index) => (
                  <li key={index} className="genres__genre">
                    {genre}
                  </li>
                ))}
              </ul>
              <p className="movie__summary">{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
