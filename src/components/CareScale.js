import sun from '../assets/sun.svg'
import water from '../assets/water.svg'
function CareScale({careType,scaleValue}){
    const range = [1, 2, 3]

    const scaleType = 
    careType === 'hot'? (
                <image src={water} alt='water-icon' />):(
                <img src={sun} alt='sun-icon'/>)

    return(
        <div>
            {range.map((rangeElem)=>
                scaleValue >= rangeElem ?(
                <span key={rangeElem.toString()}>{scaleType}</span>) : null
            )}
        </div>
    )
}
export default CareScale