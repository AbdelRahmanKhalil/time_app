// import React from 'react'
import '../App.css';
import './HeroSection.css';
import React, { Component } from 'react'

export default class HeroSection extends Component {
    render() {
        
        let background;
        if (this.props.image != null) {
            background = <img src={this.props.image} alt=""/>;
        } else if (this.props.video != null) {
            background = <video src={this.props.video} autoPlay loop muted />;
        } else {
            background = <video src="intro.mp4" autoPlay loop muted />
        }
        console.log(background)
        return (
            <div className='hero-container'>
                {background}
                {/* <video src="/intro.mp4" autoPlay loop muted /> */}

                <h1>{this.props.title}</h1>
                <p>{this.props.paragraph}</p>
                {/* <img src="/img-53.jpeg" /> */}
            </div>
        )
    }
}

// function HeroSection() {

//     return (
//         <div className='hero-container'>
//             <video src="/intro.mp4" autoPlay loop muted />
//             <h1>THE REVELATION BEGINS</h1>
//                 <p>Archangel Gabriel meets Prophet Muhammad. 
//                     Prophet Muhammad runs to his wife Khadija bint Khwaylid 
//                     who introduces him to Waraqa ibn Nawfal, a hanif adhering to the religion of Abraham.</p>
//         </div>
//     )
// }

// export default HeroSection
