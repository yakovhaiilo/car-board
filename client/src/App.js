import React from "react";
import "./App.css";
import CarBoardApp from './components/CarBoardApp'


function App () {


  return(<div className = 'App'>
             <CarBoardApp/>
        </div>
  ) 
}

export default App;









































// class App extends React.Component {
//   state = {
//     cars: [],
//   };

//   componentDidMount() {
//     axios
//       .get(`/cars`, {
//         params: {
//           // modelName: "ford",
//           // modelType: "focus",
//         },
//       })
//       .then((res) => {
//         const cars = res.data;
//         console.log(cars);

//         this.setState({ cars });
//       });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.cars.map((car, i) => (
//           <div key={i}>
//             <img src={car.image} width="200" height="300" alt={car.modelType} />
//             <span> name :{car.modelName}</span>{" "}
//             <span> type :{car.modelType}</span> <span> type :{car.date}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
