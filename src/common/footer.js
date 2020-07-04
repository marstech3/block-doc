import React,{Component} from 'react'
import {Navbar,FormControl,Button,Form,Nav} from 'react-bootstrap'
import {COLORS} from './colorConstant'
class Footer extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" fixed="bottom">
                    
                    <Nav className="ml-auto mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/features">Features</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
                
            </div>
        )
    }
}

export default Footer