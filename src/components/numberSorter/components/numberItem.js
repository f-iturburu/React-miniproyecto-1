import '../numberSorter.css'


function NumberItem ({bg, number}){

    return <div id="numberItem" style={{backgroundColor: bg, color: "white" } } className="col-2 py-5 rounded-2"> <h1>{number}</h1></div>
}

export default NumberItem

