import React from "react";
import { Table, TableHead, TableRow, TableBody, TableCell  } from '@material-ui/core';

function CarTable (props){
  return(
      <div >
        
          {props.cars.length?
           <Table style={{ width: "80vw", margin: "auto" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b></b></TableCell>
                            <TableCell><b> Model </b></TableCell>
                            <TableCell><b>Price </b></TableCell>
                            <TableCell><b>Year </b></TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.cars.map((car,i) =>
                            <TableRow key={i}>
                                <TableCell>
                                    <img data-hook="car-image" src={car.image} alt={car.model} height="100px" width="150px" />
                                </TableCell>
                                <TableCell>{car.modelName}</TableCell>
                                <TableCell>{car.price}</TableCell>
                                <TableCell>{car.modelYear}</TableCell>
                            </TableRow>
                        )}  
                    </TableBody>
                </Table>
                :  <div>
                    <h3>There are no matching results for what you were looking for</h3>
                    
                </div> }
                
      </div>
  )
}


export default CarTable;
