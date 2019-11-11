import React from 'react';
import FormButton from './FormButton';
import Items from './Items';
import amazon from '../assets/amazon.png';
import products from '../products';
import user from '../user';
import './Home.css';
import axios from 'axios';

const vals = ["5dc8dbebc765e4469c504275", "5dc8dbebc765e4469c50427d", "5dc8dbebc765e4469c5042e8", "5dc8dbebc765e4469c5042f4", "5dc8dbebc765e4469c5042db"]
const similar = ["5dc8dbebc765e4469c504375", "5dc8dbebc765e4469c504383", "5dc8dbebc765e4469c504273", "5dc8dbebc765e4469c50427f", "5dc8dbebc765e4469c50423a"]

class Home extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			current: 0,
			allowed: 2,
			terminal: false,
			mlres: [],
		}
	}

	wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
  	}	
	}

	toggleItems() {
		const newCount  = this.state.current + 1
		this.setState({ current: newCount%this.state.allowed })
	}

	toggleML() {
		this.setState({ allowed: 3 })
		const cur = !this.state.terminal
		this.setState({ terminal: cur })
		this.fetchML()
	}

	fetchML() {
		axios.get('https://machine-learning-kpmg.herokuapp.com/product/recommendations')
	  .then((response) => {
	  	this.setState({mlres :response.data})
	  })
	  .catch((error) => {
	    console.log(error);
	  });
	}

	render(){
		const choose = {
			0: vals,
			1: similar,
			2: this.state.mlres.recommendedProducts,
		}

	  return(
	    <div>
	      <img src={amazon} alt="" style={{height: "100vh", width: "100vw"}}/>
	      <FormButton/>
	      <div className="cycle" onClick={()=>this.toggleItems()}>
	      	<i class="material-icons" style={{fontSize: "40px"}}>autorenew</i>
	      </div>
	      <Items items={choose[this.state.current]} title={this.state.current}/>
	      <div className="terminalButton" onClick={()=>this.toggleML()}>
	      	Run
	      	ML
	      </div>
	      <pre className={this.state.terminal ? "terminalPopup" : "noTerminalPopup"}>
					{JSON.stringify(this.state.mlres, null, 4)}
				</pre>
	    </div>
	  )
	}
}

export default Home;