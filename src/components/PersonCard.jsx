
//SAME JUST TURNED INTO FUNCTIONAL COMPONENTS
import React from 'react';
const PersonCard = props => {
	return (
		<div>
			<h1>{props.lastName}, {props.firstName}</h1>
			<p>Age: {props.age}</p>
			<p>Hair Color: {props.hairColor}</p>
		</div>
	);
}
export default PersonCard;


//CLASS COMPONENTS

// import React, {Component} from 'react';

// class PersonCard extends Component{
// 	render(){
// 		return(
// 			<>
// 				<h1>{this.props.lastName},{this.props.firstName}</h1>
// 				<p>Age: {this.props.age}</p>
// 				<p>Hair Color: {this.props.hairColor}</p>

// 			</>
// 		)
// 	}
// }
// export default PersonCard;