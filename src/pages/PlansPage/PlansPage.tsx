import { Divider } from "@mui/material"
import AddNewPlan from "./components/AddNewPlan"

export default function PlansPage() {
  return (
    <div className='bg-white container mx-auto p-2 md:p-10 flex flex-col md:flex-row'>
      <div className="w-full md:w-72 md:pt-5">
        <AddNewPlan />
      </div>

      <Divider orientation="vertical" variant="middle" flexItem className="hidden mx-10 md:inline-flex"/>
      <Divider orientation="horizontal" variant="middle" flexItem className=" my-5 md:hidden"/>

      <div className="w-full md:w-3/4 flex flex-col">
        <div className=" h-192 overflow-auto pr-4 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {/* {
            places.map(place => {
              return <PlaceCard key={place.id} place={place} />}
            )
          } */}
        </div>

      </div>
    </div>
  )
}