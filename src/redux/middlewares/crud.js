import { actions } from "../actions";
import swal from "sweetalert";

const url = "http://localhost:4000/api";

const handleErrorResponse = (response) => {
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      swal({
        title: "Success",
        text: response.message,
        icon: "success",
      });
      resolve(response);
    } else {
      swal({
        title: "Error " + response.status,
        text:
          response.status === 409
            ? "Movie already exists"
            : "Ooops.. something went wrong",
        icon: "success",
      });
      reject(response);
    }
  });
};

export const get10Movies =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "GET10_MOVIES") {
      return fetch(`${url}/movies/get10Movies`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(actions.setMovies({ movies: data }));
        });
    }
    return next(action);
  };

export const addMovieToServer =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "ADD_MOVIE_TO_SERVER") {
      fetch(`${url}/movies/addMovie`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newMovie: action.payload.movie }),
      })
        .then((response) =>
          handleErrorResponse(response).then(() => response.json())
        )
        .then((data) => {
          dispatch(actions.addMovie({ movie: data }));
        });
    }
    return next(action);
  };
