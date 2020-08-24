import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import "./carsList.css";
import Spiner from "../spiner/Spiner";

function CarsList({ carsList, isloading }) {
  const table = () => (
    <div>
      {carsList.length ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b></b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Price</b>
              </TableCell>
              <TableCell>
                <b>Year</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carsList.map((car, i) => (
              <TableRow key={i}>
                <TableCell>
                  <img
                    data-hook="car-image"
                    src={car.image}
                    alt={car.model}
                    height="100px"
                    width="150px"
                  />
                </TableCell>
                <TableCell>{car.modelName}</TableCell>
                <TableCell>{car.price}$</TableCell>
                <TableCell>{car.modelYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div>
          <h3 className="massage">no result found!!</h3>
        </div>
      )}
    </div>
  );
  return <div className="CarsList">{isloading ? <Spiner /> : table()}</div>;
}

export default CarsList;
