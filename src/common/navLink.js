import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react'
import styled from "styled-components";
import NavigationBar from './navigationBar';
import {COLORS} from './colorConstant'

//Styled Components
const NavI = styled.div`
    .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: ${COLORS.tabDefault};
    &:hover { color: ${COLORS.tabActive}; }
  }
`;
const StyledNav = styled.div`
  height: 30px;
  white-space: nowrap;
  display: inline-block;
  // width: auto; /* width must be same size as NavBar to center */
  text-align: left; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  margin-left:15%;
  margin-top:60px;
  a {
    font-size: 0.7em;
    color: ${(props) => props.active ? COLORS.tabActive: COLORS.tabDefault}!important;
    &:hover {
      opacity: 0.7!important;
      color: ${COLORS.tabActive}!important;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

//main component to export
class NavLink extends Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    // console.log("name : ",this.props.name,", isActive : ",this.props.active);
    onItemClick(path);
  }
  // componentDidUpdate() {

  // }
  render() {
    const { active } = this.props;
    // {console.log("active in navlink: ",active)}
    return (
        <StyledNav active={active}>
          <Link to={this.props.path} onClick={this.handleClick}>
            <NavI>{this.props.name}</NavI>
          </Link>
        </StyledNav>
    );
  }
}

export default NavLink