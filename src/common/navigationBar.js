import React,{Component} from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import NavLink from './navLink';
import {equal} from 'fast-deep-equal'
import {COLORS} from './colorConstant'

//Styled Components
const Styles = styled.div`
  .navbar { 
    background-color: ${COLORS.tabBackground};
    height:100px;
    width:75%;
    left:20%;
    // position:relative;
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: ${COLORS.tabDefault};
    &:hover { color: ${COLORS.tabActive} }

  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
const StyledNavItem = styled.div`
  height: 30px;
  white-space: nowrap;
  display: inline-block;
  // width: auto; /* width must be same size as NavBar to center */
  text-align: left; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  // margin-top:70%;
  font-size: 0.7em;
  margin-top:60px;
`;

//main component to export
class NavigationBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
        activePath: '/',
        items:[]
    }
}

// componentDidMount(){
//   this.setState({activePath : this.props.activePath})
// }
// componentDidUpdate(prevProps) {
//   if(!equal(this.props.activePath, prevProps.activePath)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
//   {
//     this.setState({activePath: this.props.activePath},()=>{
//       console.log(this.state.items," wall ",this.props.jsonState)
//     })
//   }
// }
// componentDidUpdate(){
//   this.setState({items: [...this.props.jsonState]})
// }
onItemClick = (path) => {
  // console.log("This is the path :",path);
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }

render() {
    const { activePath } = this.state;
    return (
      <Styles>
        <Navbar fixed="top">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="mr-auto">
            {
                /* items = just array AND map() loops thru that array AND item is param of that loop */
                this.props.jsonState.map((item) => {
                  // console.log("active = ",item.path === activePath," itempath = ",item.path);
                    /* Return however many NavItems in array to be rendered */
                    return (
                        <NavLink path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} />
                    )
                })
            }
        </Nav>
        <Nav className="ml-auto">
          <StyledNavItem>
          USERNAME
          </StyledNavItem>
          
        </Nav>
     </Navbar>
   </Styles>
    );
}

  // <Styles>
  //   <Navbar bg="dark" variant="dark" fixed="top">
  //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //     <Nav className="mr-auto">
  //       <Nav.Link href="/">Home</Nav.Link>

  //       <Nav.Link href="/about">About</Nav.Link>

  //       <Nav.Link href="/pricing">Pricing</Nav.Link>
  //     </Nav>
  //   </Navbar>
  // </Styles>
}

export default NavigationBar