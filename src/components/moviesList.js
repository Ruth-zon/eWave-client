import { Container, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actions";
import MovieItem from "./movieItem";
import styled from "styled-components";
import MovieOffcanvas from "./movieOffcanvas";

function MoviesList() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);
  const [currentMovie, setCurrentMovie] = useState();
  const filterTitle= "Filter by category"
  const [currentCategory, setCurrentCategory] = useState(filterTitle);
  const { categoriesList } = useSelector((state) => state.constsReducer);
  const plusMovie = {
    id: -1,
    title: "Add new movie",
    image:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_960_720.png",
  };
  useEffect(() => {
    dispatch(actions.get10Movies());
  }, [dispatch]);
  const moviesToShow = movies.filter((movie)=>currentCategory===filterTitle || movie.category===currentCategory).concat(plusMovie);
  return (
    <Container>
      <Header className="my-5">Top 10 Movies</Header>
      <Dropdown onSelect={(key, e) => setCurrentCategory(e.target.innerText)}>
        <Dropdown.Toggle variant="info">
          {currentCategory || filterTitle}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {[filterTitle].concat(categoriesList).map((category, key) => (
            <Dropdown.Item key={key}>{category}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {moviesToShow.map((movie, key) => {
        return (
          <MovieItem
            movie={movie}
            key={key}
            setCurrentMovie={setCurrentMovie}
          />
        );
      })}
      <MovieOffcanvas
        currentMovie={currentMovie}
        setCurrentMovie={setCurrentMovie}
      />
    </Container>
  );
}

export default MoviesList;

const Header = styled.h1`
  color: #f072a9;
`;
