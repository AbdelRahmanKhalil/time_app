import '../App.css';
import './HeroSection.css';
import React from 'react';
import './YourWeekPie.js'
import YourWeekPie from './YourWeekPie.js';
import MostTimeBarChart from './MostTimeBarChart.js';
const user_data = [
    { activity: 'Sleep', hours: 500 },
    { activity: 'Work', hours: 300 },
    { activity: 'Sports', hours: 100 },
    { activity: 'Entertainment', hours: 100 },
  ];

function HeroSection({title, paragraph, image, video, chart}) {
    
    
        let background;
        if (image != null) {
            const img_path = process.env.PUBLIC_URL + image
            console.log(img_path)
            background = <img src={img_path} alt="" />
        } else if (video != null) {
            const vid_path = process.env.PUBLIC_URL + video
            background = <video src={vid_path} autoPlay loop muted />
        } else {
            background = <img src="/img-0.jpg" alt="" />
        }
        let chart_to_render = <></>
        if(chart !=null){
            if(chart == "pie"){
                chart_to_render = <YourWeekPie data={user_data}/>
            }
            else if(chart == "bar"){
                chart_to_render = <MostTimeBarChart data={user_data} />
            }
        }
        return (
            <div className='hero-container'>
                {background}
                <h1 className="entry-title">{title}</h1>
                {chart_to_render}
                {/* <p>{paragraph}</p> */}

            </div>
        )
    
}



export default HeroSection
