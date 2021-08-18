import styled from "styled-components";
import {BiPlayCircle} from "react-icons/bi"

function MovieItem(props) {
  const { movie , setCurrentMovie } = props;
  if (movie)
    return (
      <div className="position-relative w-100" onClick={()=>setCurrentMovie(movie)}>
        <Image src={movie.image} alt={movie.id} />
        <Title><BiPlayCircle color="#f072a9" className="fs-2 mx-2"/>{movie.title}</Title>
      </div>
    );
}
export default MovieItem;

const Image = styled.img`
  max-height: 400px;
  width: 60%;
  object-fit: cover;
  cursor: pointer;
  margin-top: 10px;
  border: 4px double #f072a9;
`;
const Title = styled.h5`
  position: absolute;
  top: 71%;
  color: white;
  text-shadow: 2px 2px #7c7a7a;
  text-align: center;
  width: 100%;
  `;
