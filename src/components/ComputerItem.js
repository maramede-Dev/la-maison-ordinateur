import CareScale from "./CareScale"
import '../styles/ComputerItem.css'


function ComputerItem({id, name, cover, hot, price, cold}){
    return(
        <li key={id} className="lmo-computer-item">
            <span className="lmo-computer-item-price">{price}€</span>
            <img className="lmo-computer-item-cover" src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='cold' scaleValue={cold} />
			    <CareScale careType='hot' scaleValue={hot} />
            </div>
        </li>
    )
}
export default ComputerItem