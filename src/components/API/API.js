import React from 'react'


class APIComponent extends React.Component{

	componentDidMount(){
		console.info("API");
		console.info(this.props);
		this.props.getUnsecuredData()
		this.props.getSecuredData(this.props.auth)
	}
	
	render(){
		return (
			<div>
				<h1>this is the api</h1>
				<h6>The data on an unsecured page</h6>
				<p>unsecured: {this.props.unsecured}</p>
				<p>secured: {this.props.secured}</p>
			</div>
		)
	}
}


export { APIComponent }
