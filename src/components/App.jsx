import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import { Container } from "../components/App.styled";



export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails/>}/>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};