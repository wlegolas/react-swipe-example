import React, { Component } from 'react';
import './App.css';
import './swiper.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="x-slider-wrapper">
        <input type="radio" name="slider" className="slide-radio1" checked id="slider_1" />
        <input type="radio" name="slider" className="slide-radio2" id="slider_2" />
        <input type="radio" name="slider" className="slide-radio3" id="slider_3" />
        <input type="radio" name="slider" className="slide-radio4" id="slider_4" />
        
        <div className="slider-pagination">
          <label htmlFor="slider_1" className="page1" />
          <label htmlFor="slider_2" className="page2" />
          <label htmlFor="slider_3" className="page3" />
          <label htmlFor="slider_4" className="page4" />
        </div>
        
        <div className="next control">
            <label htmlFor="slider_1" className="numb1"><i className="fa fa-arrow-circle-right"></i></label>
            <label htmlFor="slider_2" className="numb2"><i className="fa fa-arrow-circle-right"></i></label>
            <label htmlFor="slider_3" className="numb3"><i className="fa fa-arrow-circle-right"></i></label>
            <label htmlFor="slider_4" className="numb4"><i className="fa fa-arrow-circle-right"></i></label>
        </div>
        <div className="previous control">
            <label htmlFor="slider_1" className="numb1"><i className="fa fa-arrow-circle-left"></i></label>
            <label htmlFor="slider_2" className="numb2"><i className="fa fa-arrow-circle-left"></i></label>
            <label htmlFor="slider_3" className="numb3"><i className="fa fa-arrow-circle-left"></i></label>
            <label htmlFor="slider_4" className="numb4"><i className="fa fa-arrow-circle-left"></i></label>
        </div>

        <div className="slider slide1">
            <div>
                <h2>Css Based slider</h2>
                <a href="#" className="button">Download</a> 
            </div>
        </div>
        <div className="slider slide2">
            <div>
                <h2>CSS Slider without use of any javascript or jQuery</h2>
                <a href="#" className="button">Download</a> 
            </div>
        </div>
        <div className="slider slide3">
            <div>
                <h2>Full screen animation slider</h2>
                <a href="#" className="button">Download</a>
            </div>
        </div>
        <div className="slider slide4">
            <div>
                <h2>css3 slider</h2>
                <a href="#" className="button">Download</a> 
            </div>
        </div>
      </div>
    );
  }
}

export default App;
