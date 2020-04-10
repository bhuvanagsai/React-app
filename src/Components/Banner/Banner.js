import React, {Component} from 'react';
import './Banner.css';
import slider_image1 from '../../Assets/sliderA_01.jpg';
import slider_image2 from '../../Assets/sliderA_02.jpg';
import slider_image3 from '../../Assets/sliderA_03.jpg';
import slider_image4 from '../../Assets/sliderA_04.jpg';

class Banner extends Component{

    state = {
        slider_contents : [
            {id :1,slider_img : slider_image1,text :"slider1"},
            {id :2,slider_img : slider_image2,text :"slider2"},
            {id :3,slider_img : slider_image3,text :"slider3"},
            {id :4,slider_img : slider_image4,text :"slider4"}
        ]
    }
    render(){
        return(
            <div className="App-banner-container">  
                {this.state.slider_contents.map(p =>
                <div key = {p.id} className="showSlide fade"><img src={p.slider_img}  alt = {p.text}/><div className="content">{p.text}</div></div>
                )}  
            </div>
        );
    }
}
export default Banner;