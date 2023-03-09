import RenderCountries from "./components/renderCountries";

function WorldPopulationTable({props}){
  
 return <div >
   <div className="container text-center my-4 border-bottom border-2 pb-5  ">
         <h1>30 days of React</h1>
         <h3>World Population</h3>
         <p>Ten most popular countries</p>
         <div className="row container-fluid">
          <RenderCountries props={props} />
         </div>
   </div>
 </div>
}

export default WorldPopulationTable