import { useParams } from "react-router-dom";
import Title from "../components/Title";

const Planet = () => {
  const {planet='moon'} = useParams();

  console.log(planet);
  return (
    <div style={{width: '100%', background :'red'}}>
      <Title  number='01' title={planet}/>
    </div>
  )
}

export default Planet
