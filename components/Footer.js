import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const today = new Date();
        const year = today.getFullYear();
        return (
            <div>
                &copy; {year}, Treehouse Kids Dentist. All rights reserved.
            </div>
        );
    }
}

export default Footer;
