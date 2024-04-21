import { useDiscover } from "@/entities/discover-movies/model";
import MovieCard from "@/entities/movie-card/ui/card";
import { Routes } from "@/shared/routes";
import { DiscoverCarousel } from "@/widgets/carousel/ui/carousel"
import { useNavigate } from "react-router-dom";


const MainPage = () => {
  const { data } = useDiscover();
  const navigate = useNavigate();

  return (
    <div className="w-full mb-10">
      <DiscoverCarousel />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 sm:px-5 md:px-10">
        {
          data?.results.map(movie => (
            <MovieCard {...movie} onSelect={id => navigate(`/${Routes.Details}/${id}`)} />
          ))
        }
      </div>
    </div>
  )
}

export default MainPage