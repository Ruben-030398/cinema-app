import { Movie } from '@/shared/api/types'
import React from 'react'

export type MovieCardProps = Movie & {
  onSelect?: (id: number) => void
}

const MovieCard: React.FC<MovieCardProps> = ({ id, backdrop_path, title, vote_average, onSelect }) => {
  return (
    <div onClick={() => onSelect && onSelect(id)} className='rounded-xl overflow-hidden relative cursor-pointer'>
      <img loading='lazy' className='transition-all hover:scale-110' src={`${import.meta.env.VITE_APP_ASSETS_ENDPOINT}/w500${backdrop_path}`} alt="" />
      <div className=' bg-black bg-opacity-15 pointer-events-none absolute w-full h-full top-0 left-0 flex flex-col items-start justify-end p-2'>
        <span className="text-lg md:text-1xl font-medium">{title}</span>
        <span className="bg-slate-50 bg-opacity-40 px-1 py-0 rounded-md text-sm font-medium">{vote_average.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default MovieCard