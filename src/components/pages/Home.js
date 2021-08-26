import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection'
function Home (){
return (
<>
    <HeroSection title="Your Week So Far.." paragraph="there should be a pie graph here" video='/videos/video-2.mp4'  />
    <HeroSection title="You Spend Most of Your Time On" paragraph="An rotated barchart" video='/videos/video-2.mp4'/>
    <HeroSection title="You Achieved % of Your Goal" video='/videos/video-2.mp4'/>
    <HeroSection title="You Need To Do More" paragraph="List of customized activities" video='/videos/video-2.mp4'/>
</>

);

}
export default Home;