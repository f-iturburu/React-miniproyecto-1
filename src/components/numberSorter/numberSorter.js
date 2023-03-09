import NumberItem from "./components/numberItem";

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true
}

function NumGen (){
 let numGrid = []
 

  for (let i = 0; i <= 39; i++) {
    console.log(isPrime(i));
   if (isPrime(i)) {
    
    numGrid.push(<NumberItem bg={'#FD5E53'} number={i}/> )
   } else if(i % 2 === 0){
    numGrid.push(<NumberItem bg={'#21BF73'} number={i}/> )
   } else{
    numGrid.push(<NumberItem bg={'#FDDB3A'} number={i}/> )
   }
    
  }
  
  return numGrid
}

function numberSorter() {
  return (
    <div>
      <div className="container text-center my-4">
        <h1>30 days of React</h1>
        <h3>Number generator </h3>
        <p>Evens are green, odds are yellow and prime numbers are red.</p>
        <div className="row container-fluid gap-2 justify-content-center pb-2">
            <NumGen />
        </div>
      </div>
    </div>
  );
}

export default numberSorter;
