import { Routes } from "@/shared/routes";
import { NavLink } from "react-router-dom"

export default function NavigationDesktop() {
  return (
    <nav className="hidden md:flex justify-end items-center space-x-4 flex-1 pr-6">
      <NavLink
        to={Routes.NowPlaying}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-red-600"
            : isPending
              ? "font-medium"
              : ""
        }
      >
        Now Playing
      </NavLink>
      <NavLink className={({ isActive, isPending }) =>
          isActive
            ? "text-red-600"
            : isPending
              ? "font-medium"
              : ""
        } to={Routes.Popular}>
        Popular
      </NavLink>
      <NavLink className={({ isActive, isPending }) =>
          isActive
            ? "text-red-600"
            : isPending
              ? "font-medium"
              : ""
        } to={Routes.TopRated}>
        Top Rated
      </NavLink>
      <NavLink className={({ isActive, isPending }) =>
          isActive
            ? "text-red-600"
            : isPending
              ? "font-medium"
              : ""
        } to={Routes.Upcoming}>
        Upcoming
      </NavLink>
    </nav>
  )
}
