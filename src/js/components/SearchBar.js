import React from 'react';

import { Form, FormControl } from 'react-bootstrap';

export default class SearchBar extends React.Component {
    render() {
        return (
            <Form style={{paddingBottom: "10px"}} inline>
                <FormControl onChange={this.props._updateQuery} value={this.props.query} style={{width: "100%"}} type="text" placeholder={`"Search for a Movie"`} className="mr-sm-2" />
            </Form>
        );
    }
}