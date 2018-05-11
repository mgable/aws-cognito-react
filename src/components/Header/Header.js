import React from 'react'
import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'
import { state } from 'aws-cognito-redux-saga'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem 
} from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class HeaderComponent extends React.Component {
  static propTypes = {
	isSignedIn: PropTypes.string,
	signUpError: PropTypes.bool,
	signOut: PropTypes.func,
	signIn: PropTypes.func,
	signUp: PropTypes.func,
	auth: PropTypes.object
  }

  constructor(props){
	super(props)
	this.state = {isOpen: false}
  }

  componentDidUpdate(){
	console.info("I updated!!!");
  }

  signOut(){
	this.props.signOut()
  }

  toggle(){
	console.info("I am going to toggle");
	console.info(this.state.isOpen);
	this.setState({isOpen: !this.state.isOpen})
  }

  render() {
	const { auth } = this.props

	// return (
	// 	<Navbar>
	// 		<NavItem>
	// 			<Link to="/landing"><img alt="github" width="28" src="GitHub-Mark-120px-plus.png" /></Link>
	// 		</NavItem>
	// 		<NavbarToggler onClick={this.toggle} />

	// 	 	<Collapse isOpen={true} navbar>
	// 			<Nav className="ml-auto" navbar>
	// 			{auth.isSignedIn !== state.AUTH_SUCCESS ? (
	// 			  <NavItem>
	// 				onClick={this.signIn}
	// 			  ><Link to="/signin">Sign Up / Sign In</Link></NavItem>
	// 			) : (
	// 			   <NavItem>
	// 				{auth.info.username}
	// 				  <Button onClick={this.signOut}>Sign Out</Button>
	// 			   </NavItem>
	// 			)}
	// 			</Nav>
	// 		</Collapse>
	// 	</Navbar>
	// )
	return (
		<div>
			<Navbar color="light" light expand="md">
				<LinkContainer to="/landing"><NavbarBrand>reactstrap</NavbarBrand></LinkContainer>
				<NavbarToggler onClick={() => this.toggle()} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
				 		<NavItem>
							<LinkContainer to="/protected"><NavLink>Protected</NavLink></LinkContainer>
				  		</NavItem>
				  		<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
				  		</NavItem>
						{auth.isSignedIn !== state.AUTH_SUCCESS ? (
							<LinkContainer to="/signin"><NavItem onClick={this.signIn}>Sign Up / Sign In</NavItem></LinkContainer>
						) : (
						   <NavItem onClick={() => this.signOut()}>Sign Out</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
  }
}
