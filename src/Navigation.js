import React, {Component} from "react";
import ReactDOM from "react-dom";

export default function Navigation() {
    return (
    <nav>
    <ul>
    <li><a className='active' href='/'>Home</a></li>
    <li><a href='#about'>About</a></li>
    </ul>
    </nav>
     )
    }
