import { Bookmark, Heart, Share } from 'lucide-react';
import { useParams } from 'react-router-dom'

import { useGetMovieDetails } from '@/entities/movie-details/model';
import { Button } from '@/shared/ui/button';
import LoadingIndicator from '@/entities/page-loading-indicator/ui/loading-indicator';

const MovieDetails = () => {
  const { movieId } = useParams();

  const { data, isLoading, isFetching } = useGetMovieDetails(Number(movieId) || 0)

  if (isLoading || isFetching) {
    return <LoadingIndicator />
  }

  return (
    <div className='relative h-screen bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${import.meta.env.VITE_APP_ASSETS_ENDPOINT}/original${data?.backdrop_path})` }}>
      <div className='p-6 gap-5 w-full h-full bg-half-transparent flex flex-col justify-center items-start'>
        <span className="text-lg md:text-2xl font-medium">{data?.title}</span>
        <span className="bg-slate-50 bg-opacity-40 px-2 py-1 rounded-md text-md font-medium">{data?.vote_average.toFixed(1)}</span>
        <span className="max-w-xl bg-opacity-40 rounded-md text-md font-medium">{data?.overview}</span>
        <span><span className='text-gray-400 mr-2 inline-block'>Genres:</span> {data?.genres.map(g => g.name).join(', ')}</span>
        <span><span className='text-gray-400 mr-2 inline-block'>Production Companies:</span> {data?.production_companies.map(g => g.name).join(', ')}</span>
        <div className='flex flex-row items-center gap-3'>
          <Button>Watch online</Button>
          <Button variant="link"><Heart /></Button>
          <Button variant="link"><Share /></Button>
          <Button variant="link"><Bookmark /></Button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails