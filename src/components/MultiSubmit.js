import React from "react";
import './Form.css';
import Select from "react-select";

class Form extends React.Component	{
  constructor(props) {
    super(props);
  }

  handleMultiChange(option) {
    this.props.callbackFromParent(option)
  }

	render() {
		return(
			<div >
	      <Select
	        name="filters"
	        placeholder="Enter Data"
	        value={this.props.multiValue}
	        options={this.props.interests}
	        onChange={(e)=>this.handleMultiChange(e)}
          multi
	      />
			</div>
		)
	}
}

export default Form;