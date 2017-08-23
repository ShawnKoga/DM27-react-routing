import React from 'react';
import { Link } from 'react-router-dom'

export default function(props) {
    return (
        <div>
            <h1>This is the ABOUT page!</h1>
            <p> Blah blah blah </p>
            <Link to='/about/FAQ'>FAQ</Link>
            <Link to='/about/company'>Company</Link>
            {props.children}
        </div>
    )
}