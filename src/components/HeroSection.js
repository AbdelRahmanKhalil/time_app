import '../App.css';
import './HeroSection.css';
import React, { Component } from 'react'

export default class HeroSection extends Component {
    render() {
        
        return (
            <div className='hero-container'>
                
                <h1>{this.props.title}</h1>
                <p>{this.props.paragraph}</p>
                
            </div>
        )
    }
}

