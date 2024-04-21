import MovieCard from "@/entities/movie-card/ui/card";
import LoadingIndicator from "@/entities/page-loading-indicator/ui/loading-indicator";
import { usePopular } from "@/entities/popular-movies/model";
import { cn } from "@/shared/lib/utils";
import { Routes } from "@/shared/routes";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/shared/ui/pagination";
import { map, range } from "lodash";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const MAX_PAGE_NUMBER = 500;

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;

  const {
    data: { results = [], page: actualPage, total_pages } = {},
    isLoading,
    isFetching,
    isError,
  } = usePopular(`?page=${page}`);

  const navigate = useNavigate();

  const startPage = Math.max(page - 1, 1);
  const endPage = Math.min(startPage + 3, Number(total_pages), MAX_PAGE_NUMBER);

  const visiblePages = range(startPage, endPage)

  useEffect(() => {
    setSearchParams(new URLSearchParams(`page=${page}`))
  }, []);

  if (isLoading || isFetching || isError) {
    return <LoadingIndicator />
  }

  return (
    <div className="w-full mb-10">
      <div className="mb-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 sm:px-5 md:px-10">
        {
          results.map(movie => (
            <MovieCard {...movie} onSelect={id => navigate(`/${Routes.Details}/${id}`)} />
          ))
        }
      </div>
      <Pagination>
        <PaginationContent className="gap-0">
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={() => Number(actualPage || 0) > 1 && setSearchParams(new URLSearchParams(`page=${(actualPage || 0) - 1}`))} />
          </PaginationItem  >
          {
            map(visiblePages, i => {
              return (
                <PaginationItem className={cn("cursor-pointer", { 'bg-slate-100 bg-opacity-20 rounded-lg': i === page })}>
                  <PaginationLink onClick={() => setSearchParams(new URLSearchParams(`page=${i}`))}>{i}</PaginationLink>
                </PaginationItem>
              )
            })
          }
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={() => page < Number(total_pages) && setSearchParams(new URLSearchParams(`page=${(page || 0) + 1}`))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default Popular