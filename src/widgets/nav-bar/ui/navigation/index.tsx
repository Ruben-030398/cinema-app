import { Link } from "react-router-dom"

import { Button } from "@/shared/ui/button";
import { SearchBar } from "@/features/search-dialog/ui/search-dialog";

import NavigationDesktop from "../navigation-desktop";
import { NavigationMobile } from "../navigation-mobile";

export default function Navigation() {

  return (
    <header className="top-0 flex fixed z-50 w-screen items-center h-14 sm:px-4 border-b bg-white md:px-6 dark:bg-gray-950">
      <NavigationMobile />
      <Link className="flex flex-1 justify-center sm:justify-start items-center gap-2 mr-0 sm:mr-4" to="/">
        <img src="/logo.svg" className="w-[80px] h-[50px]" />
        <span className="font-semibold text-center uppercase">Infinity Productions</span>
      </Link>
      <NavigationDesktop />
      <Button variant='link'>
        <SearchBar />
      </Button>
    </header>
  )
}
