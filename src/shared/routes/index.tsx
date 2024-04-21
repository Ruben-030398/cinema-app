import App from "@/app/app";
import MovieDetails from "@/pages/details/ui/movie-details";
import MainPage from "@/pages/main/ui/main-page";
import NowPlaying from "@/pages/now-playing/ui/now-playing";
import Popular from "@/pages/popular/ui/popular";
import SearchPage from "@/pages/search/ui/search-page";
import TopRated from "@/pages/top-rated/ui/top-rated";
import Upcoming from "@/pages/upcoming/ui/upcoming";
import { Navigate, createBrowserRouter } from "react-router-dom";

export enum Routes {
  Main = '/',
  Search = 'search',
  NowPlaying = 'now-playing',
  Popular = 'popular',
  TopRated = 'top-rated',
  Upcoming = 'upcoming',
  Details = 'details'
}

export const router = createBrowserRouter([
  {
    path: Routes.Main,
    element: <App />,
    children: [
      {
        index: true,
        path: '',
        element: <MainPage />,
      },
      {
        path: Routes.NowPlaying,
        element: <NowPlaying />,
      },
      {
        path: Routes.Popular,
        element: <Popular />,
      },
      {
        path: Routes.TopRated,
        element: <TopRated />,
      },
      {
        path: Routes.Upcoming,
        element: <Upcoming />,
      },
      {
        path: "*",
        element: <Navigate to={Routes.Main} />,
      },
      {
        path: Routes.Search,
        element: <SearchPage />,
      },
      {
        path: `${Routes.Details}/:movieId`,
        element: <MovieDetails />,
      },
    ],
  },

]);