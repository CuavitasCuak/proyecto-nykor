import { NavBarComic } from './NavBarComic'
import { ComicMenu } from './ComicMenu'
import { InfoComic } from './InfoComic'
import { Footer } from './Footer'

export const Comic = () => {
  return (
    <>
      <NavBarComic />
      <InfoComic />
      <ComicMenu />
      <Footer/>
    </>
  )
}