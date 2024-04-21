import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import MovieCard from "@/entities/movie-card/ui/card";
import { useSearch } from "@/entities/search/model";
import { useDebounceValue } from "@/shared/hooks/use-debounce";
import { Routes } from "@/shared/routes";
import { Input } from "@/shared/ui/input";
import LoadingIndicator from "@/entities/page-loading-indicator/ui/loading-indicator";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';

  const [search, setSearch] = useState(searchQuery);

  const [debouncedValue, setValue] = useDebounceValue(search, 500);

  const {
    data: { results = [] } = {},
    isLoading,
    isFetching,
  } = useSearch(`?query=${debouncedValue}&include_adult=false&language=en-US&page=1`, { enabled: !!debouncedValue });

  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams(new URLSearchParams(`query=${debouncedValue}`))
  }, [debouncedValue]);

  return (
    <div className="w-full mb-10">
      <Input
        id="movie"
        defaultValue=""
        value={search}
        className="col-span-3 max-w-64 sm:max-w-96 mx-3 sm:mx-5 md:mx-10 mr-auto mb-5"
        onChange={e => { setSearch(e.target.value); setValue(e.target.value) }}
      />
      {
        (isFetching || isLoading) ? <LoadingIndicator /> : (
          <div className="mb-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 sm:px-5 md:px-10">
            {
              results.map(movie => (
                <MovieCard {...movie} onSelect={id => navigate(`/${Routes.Details}/${id}`)} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default SearchPage