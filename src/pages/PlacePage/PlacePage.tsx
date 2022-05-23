import { useParams } from "react-router-dom"
import Comments from "./components/Comments"
import Gallery from "./components/Gallery"
import Main from "./components/Main"
import {IPlace} from '../../types'
import { usePlace } from "../../hooks/usePlace"
import { useEffect } from "react"

export default function PlacePage() {
  const { id } = useParams();
  const {loadPlace, place, comments} = usePlace();

  useEffect(() => {
    loadPlace(id as string);
  }, [])

  return (
    place.name ? (
      <div className="bg-white container mx-auto p-2 md:p-10 flex flex-col">
        <Main />
        {/* <Gallery photos={place.photos} /> */}
        {place.galleries.map((gallery, i) => <Gallery key={i} name={gallery.name} photos={gallery.images}/>)}
        <Comments />
      </div>
    ) :
    <div> No se encontró el lugar </div>
  )
}
