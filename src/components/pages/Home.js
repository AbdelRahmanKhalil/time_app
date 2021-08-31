import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection'
function Home (){
return (
<>
    <HeroSection title="Your Week So Far.." paragraph="there should be a pie graph here" video='/videos/video-2.mp4' chart='pie'/>
    <HeroSection title="You Spend Most of Your Time On" paragraph="A rotated barchart" chart="bar"/>
    <HeroSection title="You Achieved % of Your Goal" />
    <HeroSection title="You Need To Do More" paragraph="List of customized activities" />
</>

);

}
export default Home;