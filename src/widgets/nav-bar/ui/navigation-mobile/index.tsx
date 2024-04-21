import { Menu } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import { cn } from "@/shared/lib/utils"
import { Routes } from "@/shared/routes"
import { Button } from "@/shared/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet"

export function NavigationMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="md:hidden grid grid-cols-1 gap-1 mx-2">
      <Sheet onOpenChange={open => setOpen(open)} open={isOpen}>
        <SheetTrigger asChild>
          <Button variant="outline"><Menu /></Button>
        </SheetTrigger>
        <SheetContent side="left">
          <NavLink
            onClick={() => setOpen(false)}
            to={Routes.Main}
          >
            <span className="font-semibold mb-4 inline-block">CINEMA HUB</span>
          </NavLink>

          <nav className="justify-between gap-4 m-0 flex flex-col items-start flex-1">
            <NavLink
              to={Routes.NowPlaying}
              onClick={() => setOpen(false)}
              className={({ isActive }) => cn('m-0', 'font-medium', { "text-red-600": isActive })}
            >
              Now Playing
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => cn('m-0', 'font-medium', { "text-red-600": isActive })}
              to={Routes.Popular}
            >
              Popular
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => cn('m-0', 'font-medium', { "text-red-600": isActive })}
              to={Routes.TopRated}
            >
              Top Rated
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => cn('m-0', 'font-medium', { "text-red-600": isActive })}
              to={Routes.Upcoming}
            >
              Upcoming
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
