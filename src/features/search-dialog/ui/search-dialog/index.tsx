import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Routes } from "@/shared/routes";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useSearch } from "@/entities/search/model";
import { useDebounceValue } from "@/shared/hooks/use-debounce";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [debouncedValue, setValue] = useDebounceValue(search, 500);

  const navigate = useNavigate();

  const { data } = useSearch(`?query=${debouncedValue}&include_adult=false&language=en-US&page=1`, { enabled: !!debouncedValue });

  const onSelect = (id: number) => {
    navigate(`/${Routes.Details}/${id}`)
    setIsOpen(false)
  }

  const seeAllResults = () => {
    navigate(`/${Routes.Search}?query=${debouncedValue}`)
    setIsOpen(false)
  } 

  return (
    <Dialog open={isOpen} onOpenChange={open => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(prev => !prev)} variant="outline"><Search /></Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden max-w-screen-md w-[80%]">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle>Search for movies</DialogTitle>
          <Input
            id="movie"
            defaultValue=""
            value={search}
            className="col-span-3"
            onChange={e => { setSearch(e.target.value); setValue(e.target.value) }}
          />
        </DialogHeader>

        <ul className="max-h-80 overflow-auto gap-6 flex flex-col">
          {
            !!search && data?.results.map(el => {
              return (el.backdrop_path || el.poster_path) ? (
                <li onClick={() => onSelect(el.id)} className="cursor-pointer rounded-lg shadow-md bg-slate-200 bg-opacity-0 hover:bg-opacity-15 transition-all p-2 flex justify-start gap-9 items-center" key={el.backdrop_path}>
                  <img className="w-24" alt={el.title} src={`${import.meta.env.VITE_APP_ASSETS_ENDPOINT}/w500${el.backdrop_path || el.poster_path}`} />
                  <div className="flex gap-2 items-center">
                    <span className="text-lg md:text-1xl font-medium">{el.title}</span>
                    <span className="bg-slate-50 bg-opacity-40 px-1 py-0 rounded-md text-sm font-medium">{el.vote_average.toFixed(1)}</span>
                  </div>
                </li>) : null
            })
          }
        </ul>

        {data?.results.length && <DialogFooter>
          <Button onClick={seeAllResults} type="submit">See all results</Button>
        </DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}