import HexColorItem from "./components/hexColorItem";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';

import { useState } from "react";

function generateHexColorID() {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  color = "#" + color;
  return color;
}

function HexColorGridGenerator(num) {
    let colorGrid = [];
    if (parseInt(num) >= 1 && parseInt(num) <= 30) {
        for (let i = 0; i < parseInt(num); i++) {
      
          colorGrid.push(<HexColorItem props={generateHexColorID()} />);
        }
    } else if (num==null){
       
    } else{
        colorGrid = <Alert variant="danger">
        Invalid input
      </Alert>
    }
  
  return colorGrid;
}


function HexColorsTable() {
  const [amount, setAmount] = useState(null);
  const [render,setRender] =useState(HexColorGridGenerator(amount))
  return (
    <div>
      <div className="container text-center my-4">
        <h3>Hexadecimal colors generator</h3>
        <Form onSubmit={(e) =>{
          e.preventDefault()
           setRender(HexColorGridGenerator(amount))
        }}>
        <div className="d-flex my-3 justify-content-center">
          <Form.Control
            id="colorNum"
            onChange={e => setAmount(e.target.value)}
            className="w-50"
                min="1" 
                max="30"
            type="number"
            placeholder="Insert the desired amounts of random colors (max 30) "
          />
          <Button
            type="submit"
            className="ms-3"
            variant="primary"
          >
            Generate
          </Button>
        </div>
          </Form>
        <div className="row container-fluid gap-2 justify-content-center border-bottom border-2 pb-5 ">{render}</div>
      </div>
    </div>
  );
}

export default HexColorsTable;
