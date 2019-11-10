import React from "react";
import './Form.css';
import interests from '../interests';
import occupations from '../occupations';
import MultiSubmit from './MultiSubmit';
import logo from '../assets/logo.jpg';
import axios from 'axios';


const filter = interests.interests.map(val => {
	return {value: val, label: val}
})

const occ = occupations.occupations.map(val => {
	return {value: val, label: val}
})

class Form extends React.Component	{
  constructor() {
    super();
    this.state = {
      multiValue: [],
      show: false
    };
  }

  myCallback(option) {
    const added = {...this.state.multiValue, ...option}
    this.setState({ multiValue: added });
  }

  randID() {
  	const val = Math.random().toString(36).substr(2, 9);
  	return val
  }

  shuffle(array) {
  	var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
		}
	  return array;
	}

  pickInterests () {
  	const inter = interests.interests
  	let num = [...Array(inter.length).keys()]
  	num = this.shuffle(num)
  	const vals = [...Array(10)].map(val => {
  		return inter[num.pop()]
  	})
  	return vals
  }

  pickOccupation() {
  	const oc = occupations.occupations
		return oc[Math.floor(Math.random() * oc.length)]
  }

  sendData(occ, inter){
  	console.log(inter)

		axios.post('http://machine-learning-kpmg.herokuapp.com/profile', {
	    	occupation: occ,
    		interests: inter
	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }
  generate() {
  	const occupation = this.pickOccupation()
  	const interests = this.pickInterests()
  	this.sendData(occupation, interests)
  	return 'Sending Account: ' + this.randID() + ', Occupation: ' + occupation + ', Interests: ' + interests + '...\n'
  }

  toggle() {
  	const not = !this.state.show
  	this.setState({show: not})
  }

	render() {
		return(
			<div className="background">
				<div className="form">
					<div className="formTitle">
						<img src={logo} alt="" style={{height: "70px", borderRadius: "5px", float: "left"}}/>
						<div style={{paddingTop: "20px"}}>Personalize Profile</div>
					</div>
					<div className="contentWrapper">
						<label>Occupation</label>
		        <MultiSubmit interests={occ} callbackFromParent={(e) => this.myCallback(e)}/>
		        <div style={{height: "20px"}}></div>
		        <label>Interests</label>
		        <MultiSubmit interests={filter} callbackFromParent={(e) => this.myCallback(e)}/>
	        </div>
	        <div className="submit" onClick={() => this.toggle()}>
	        	Submit
	        </div>
	        <div className={this.state.show ? "terminal" : "noTerminal"}>
	        	{[...Array(20)].map(val => {
	        		return <div>{this.generate()}</div>
	        	})}
	        </div>
				</div>
			</div>
		)
	}
}

export default Form;