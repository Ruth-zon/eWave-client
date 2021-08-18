import { Button, Form, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actions";

function MovieOffcanvas(props) {
  const { currentMovie, setCurrentMovie } = props;
  const dispatch = useDispatch();
  const {categoriesList} = useSelector(state=>state.constsReducer)
  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title: e.target["title"].value,
      category: e.target["category"].value,
      rating: e.target["rating"].value,
    };
    dispatch(actions.addMovieToServer({ movie }));
    setCurrentMovie();
  };
  return (
    <Offcanvas show={!!currentMovie} onHide={() => setCurrentMovie()}>
      {currentMovie?.id === -1 ? (
        <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{currentMovie?.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Movie Rating</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="Enter rating"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Movie Category</Form.Label>
                <Form.Select>
                  {categoriesList.map((category, key) => (
                    <option key={key}>{category}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Offcanvas.Body>
        </>
      ) : (
        <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{currentMovie?.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <img
              src={currentMovie?.image}
              alt={currentMovie?.id}
              className="mw-100"
            />
            <p>Category: {currentMovie?.category}</p>
            <p>Rating: {currentMovie?.rating}</p>
          </Offcanvas.Body>
        </>
      )}
    </Offcanvas>
  );
}

export default MovieOffcanvas;
