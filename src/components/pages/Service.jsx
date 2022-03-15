import { useParams } from "react-router-dom"

export default function Service({ services }) {
  const { id } = useParams()
  // match one service to the route params
  const foundService = services.find(service => service.id.toString() === id)  
  return (
    <div>
      <h1>Service Details</h1>
      <h3>{foundService.name}</h3>
      <p>{foundService.price}</p>

      <h6>{foundService.description}</h6>
    </div>
  )
}