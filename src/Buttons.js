
import { data } from "./data";


function Buttons({ filteredClothes, setClothes }) {

  return(<div className="cont">
    <button className="change" onClick={ () => setClothes(data) } >ALL</button>
    <button className="change" onClick={ () => filteredClothes("dress") } >dresses</button>
    <button className="change" onClick={ () => filteredClothes("pants") } >pants</button>
    <button className="change" onClick={ () => filteredClothes("skirt") } >skirts</button>
    <button className="change" onClick={ () => filteredClothes("shirt") } >shirts</button>
    <button className="change" onClick={ () => filteredClothes("shoes") } >shoes</button>
  </div>)
}

export default Buttons;