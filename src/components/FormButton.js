import React from "react";
import './FormButton.css';
import { Link } from 'react-router-dom';

class FormButton extends React.Component	{
	render() {
		return(
			<Link to={'/form'} style={{ textDecoration: 'none', color: 'inherit' }}>
				<div className="formButton">
					<div className="personIcon">
						<i class="material-icons" style={{color: "#b7b8bb", fontSize: "50px"}}>person_add</i>
					</div>
						<div className="buttonText">	
							<p className="title">Personalize Profile</p>
							<p className="description">Optimize your product references</p>
						</div>
				</div>
			</Link>
		)
	}
}

export default FormButton;