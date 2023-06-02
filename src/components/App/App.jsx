import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import { Container } from "./App.styled";
import Credits from "../Credits";
import Reviews from "../Reviews/Reviews";

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};