import { useParams } from "react-router-dom";

const Planet = () => {
  const {planet} = useParams();
  return (
    <div>{planet}</div>
  )
}

export default Planet
