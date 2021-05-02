import React from 'react';

import { Navbar } from 'react-bootstrap';

export default class Footer extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            mode: "light",
            showModal: false
        }
    }

    render() {
        return (
            <Navbar fixed={"bottom"}>
                <Navbar.Brand style={{fontSize: "10px"}}>Terry Fu 2021</Navbar.Brand>
            </Navbar>
        );
    }
}