import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React,{Component} from 'react'
import styled from "styled-components";
import {COLORS} from './colorConstant'

//Styled Components
const NavIcon = styled.div`
    .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: ${COLORS.tabDefault};
    &:hover { color: ${COLORS.tabActive}; }
  }
`;
const StyledNavItem = styled.div`
  height: 50px;
  width: 150px; /* width must be same size as NavBar to center */
  text-align: left; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  margin-left:25%;
  a {
    font-size: 0.7em;
    color: ${(props) => props.active ? COLORS.tabActive: COLORS.tabDefault}!important;
    :hover {
      opacity: 0.7!important;
      color: ${COLORS.tabActive}!important;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

//main component to export
class NavItem extends Component {

    
    
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <NavIcon>{this.props.name}</NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

export default NavItem