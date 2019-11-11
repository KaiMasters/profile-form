import React from "react";
import './Items.css';
import products from '../products'

const prod = products.products	

class Items extends React.Component	{

	renderItem(id) {
		const result = prod.find(obj => {return obj._id === id})

		return(
			<div className="item">
				<div className="shop">
					<i class="material-icons" style={{fontSize: '100px'}}>add_shopping_cart</i>
				</div>
				<p className="itemText">{result.Product}</p>
				<p className="itemText">{result.Brand}</p>
				<p className="itemText">{result.Department}</p>
				<p className="itemText">{result.Category}</p>
			</div>
		)
	}

	render() {
		const title = {
			0: "You Have Purchased",
			1: "You May Also Like",
			2: "Similar Users Have Purchased"
		}

		return(
			<div className="items">
				<div className="itemTitle">{title[this.props.title]}</div>
				{this.props.items.map(val => {
					return(
						<div className="item">
							{this.renderItem(val)}
						</div>
					)
				})}
			</div>
		)
	}
}

export default Items;