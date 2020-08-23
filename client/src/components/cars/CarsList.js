import React from "react";
import {Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';


function CarsList (props){
    const {carsList} = props;
  return(
      <div className = "CarTable">
          {carsList.length?
           <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b></b></TableCell>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Price</b></TableCell>
                            <TableCell><b>Year</b></TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {carsList.map((car,i) =>
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


export default CarsList;
