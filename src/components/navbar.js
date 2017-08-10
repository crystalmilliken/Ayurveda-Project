import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export default class NavigationBar extends Component {
    render(){
        return(
    <Navbar inverse collapseOnSelect>
     <Navbar.Collapse>
  
      <Nav pullRight>
          <LinkContainer to='/home'>
        <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            
        <NavDropdown eventKey={3} title="Dosha Types" id="basic-nav-dropdown">
                <LinkContainer to='/kapha'>
                    <NavItem eventKey={3.1}>Kapha</NavItem>
                </LinkContainer>
                <LinkContainer to='/pitta'>
                    <NavItem eventKey={3.2} href="/pitta">Pitta</NavItem>
                </LinkContainer>
                <LinkContainer to='/vata'>
                    <NavItem eventKey={3.3} href="/vata">Vata</NavItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to='/compareAll'>
                    <NavItem eventKey={3.4} href="/compareAll">Compare</NavItem>
                </LinkContainer>
        </NavDropdown>
                <LinkContainer to='/about'>
                    <NavItem eventKey={2} href="/about">About</NavItem>
                </LinkContainer>
                <LinkContainer to='/quiz'>
                     <NavItem eventKey={4} href="/quiz">Dosha Quiz</NavItem>
                </LinkContainer>
       </Nav>
    </Navbar.Collapse>
  </Navbar>
                
                
         
        )
    }

}