import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import NavItem from './navItem'
import NavigationBar from './navigationBar';
import { COLORS } from './colorConstant'
import {Shake, ShakeLittle, ShakeSlow, ShakeHorizontal } from 'reshake'

//Styled Components
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 200px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 0em;      /* Stay at the top */
  background-color: ${COLORS.tabBackground}; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top:30px  
`;

const HeaderDiv = styled.div`
    padding-bottom:120px;
`;

//Class Compoent
class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: '/',
            items: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'HOME',
                    css: 'fa fa-fw fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/myFile',
                    name: 'YOUR FILES',
                    css: 'fa fa-fw fa-clock',
                    key: 2
                },
                {
                    path: '/sharedFile',
                    name: 'SHARED FILES',
                    css: 'fa fa-fw fa-clock',
                    key: 3
                },
                {
                    path: '/friend',
                    name: 'FRIENDS',
                    css: 'fa fa-fw fa-clock',
                    key: 4
                },
                {
                    path: '/about',
                    name: 'ABOUT',
                    css: 'fa fa-fw fa-clock',
                    key: 5
                },
                {
                    path: '/setting',
                    name: 'SETTINGS',
                    css: 'fa fa-fw fa-clock',
                    key: 6
                }
            ],
            childStateJson: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'HOME',
                    css: 'fa fa-fw fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                }
            ]
        }
    }
    onItemClick = (path) => {
        this.setState({ activePath: path },
            () => {
                switch (this.state.activePath) {
                    // case '/':
                    //     {
                    //         console.log("this was not called in switch")
                    //         this.setState({
                    //             childStateJson: [
                    //                 {
                    //                     path: '/', /* path is used as id to check which NavItem is active basically */
                    //                     name: 'HOME',
                    //                     css: 'fa fa-fw fa-home',
                    //                     key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                    //                 }
                    //             ]
                    //         },()=>(console.log("this was not called child ",this.state.childStateJson)))

                    //         break
                    //     }
                    case '/myFile':
                        {
                            this.setState({
                                childStateJson: [
                                    {
                                        path: path, /* path is used as id to check which NavItem is active basically */
                                        name: this.state.items.filter(item => (item.path === path))[0].name,
                                        css: 'fa fa-fw fa-home',
                                        key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                                    },
                                    {
                                        path: '/uploadFile', /* path is used as id to check which NavItem is active basically */
                                        name: 'UPLOAD FILE',
                                        css: 'fa fa-fw fa-home',
                                        key: 2 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                                    }
                                ]
                            }, () => (console.log("this was not called child ", this.state.childStateJson)))

                            break
                        }

                    default:
                        {
                            this.setState({
                                childStateJson: [
                                    {
                                        path: path, /* path is used as id to check which NavItem is active basically */
                                        name: this.state.items.filter(item => (item.path === path))[0].name,
                                        css: 'fa fa-fw fa-home',
                                        key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                                    }
                                ]
                            }, () => (console.log("this was not called child ", this.state.childStateJson)))

                        }

                }
            });


        /* Sets activePath which causes rerender which causes CSS to change */
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <div>
                <NavigationBar jsonState={this.state.childStateJson} activePath={activePath} />
                <StyledSideNav>
                    <HeaderDiv className="h1 text-white">
                        <ShakeSlow
                            // h={15}
                            // v={0}
                            // r={0}
                            // dur={1000}
                            // int={0.5}
                            // max={100}
                            // fixed={true}
                            // fixedStop={false}
                            // freez={false}
                            >
                            <h1>BlocDoc</h1>
                        </ShakeSlow>

                    </HeaderDiv>
                    {
                        /* items = just array AND map() loops thru that array AND item is param of that loop */
                        items.map((item) => {
                            /* Return however many NavItems in array to be rendered */
                            return (
                                <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} onStateChangeCalled={this.state.childStateJson} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} />
                            )
                        })
                    }
                </StyledSideNav>
            </div>
        );
    }
}
const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}