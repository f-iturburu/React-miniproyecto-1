import '../hexColors.css'

function HexColorItem ({props}){
    return <div style={{backgroundColor: props}} className="col-2 py-5 rounded-2"> <h1>{props}</h1></div>
}

export default HexColorItem