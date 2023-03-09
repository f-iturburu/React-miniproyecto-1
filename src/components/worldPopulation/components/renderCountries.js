
import TableRow from './tableRow';

function percentage(countryPopulation, worldPopulation) {
    return (100 * countryPopulation) / worldPopulation;
 } 
 
function RenderCountries ({props}){
   return props.map((i)=> <TableRow props={i} perc={percentage(i.population, props[0].population)}/>)
}

export default RenderCountries