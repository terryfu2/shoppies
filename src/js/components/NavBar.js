import React from 'react';


import { Navbar, Nav } from 'react-bootstrap';

export default class NavBar extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar fixed={"top"}>
                    
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" />
                        <Nav.Link style={{fontSize: "25px", color:"white"}} onClick={() => this.props._toggleShowModal()}>Nominations</Nav.Link>

                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}