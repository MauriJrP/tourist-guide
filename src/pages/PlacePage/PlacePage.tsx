import { useParams } from "react-router-dom"
import { places } from '../../data'
import Comments from "./components/Comments"
import Gallery from "./components/Gallery"
import Main from "./components/Main"

export default function PlacePage() {
  const { id } = useParams()
  const place = places.find(p => id && p.id === parseInt(id))

  return (
    place ? (
      <div className="bg-white container mx-auto p-2 md:p-10 flex flex-col">
        <Main place={place} />
        <Gallery photos={place.photos} />
        <Comments />
      </div>
    ) :
    <div> No se encontró el lugar </div>
  )
}
