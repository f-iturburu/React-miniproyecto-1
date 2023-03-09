import ProgressBar from 'react-bootstrap/ProgressBar';


function TableRow ({props,perc}){
   return <div className="col-12 row container-fluid">
        <div className="col-2 text-start">
          {props.country}
        </div>
        <div className="col-8">
        <ProgressBar className='mt-1' variant="warning" now={perc}/>
        </div>
        <div className="col-2 text-end">
        {props.population.toLocaleString("en-US")}
        </div>
        </div>
}

export default TableRow