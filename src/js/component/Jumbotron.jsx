import React from "react"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = function () {
	return (
		<>
	
	<div className="card">
  <div className="card-body">
    <h5 className="card-title">Bienvenido visitante!</h5>
    <p className="card-text">Érase una vez un molinero muy pobre que dejó a sus tres hijos por herencia un molino, un asno y un gato. En el reparto, el molino fue para el hijo mayor, el asno para el segundo y el gato para el más joven. Éste último se lamentó de su suerte en cuanto supo cuál era su parte.

—¿Qué será de mí? Mis hermanos trabajarán juntos y harán fortuna, pero yo sólo tengo un gato.

El gato escuchó las palabras de su joven amo y decidido a ayudarlo, dijo:

—No se preocupe mi señor, yo puedo ser más útil y valioso de lo que piensa. Le pido que por favor me regale un saco y un par de botas para andar entre los matorrales.

Aunque el joven amo no creyó en las palabras del gato, le dio lo que pedía pues sabía que él era un animal muy astuto.</p>
    <a href="#" className="btn btn-primary">Ayuda a mi gato!</a>
  </div>
</div>
	</>);
};

export default Jumbotron;