import React from 'react'


class APIComponent extends React.Component{

	componentDidMount(){
		this.props.getData()
	}
	
	render(){
		return (
			<h1>this is the api</h1>
		)
	}
}


export { APIComponent }
