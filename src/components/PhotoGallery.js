import React, {Component} from 'react';
import Swipe from './Swipe.js';
import './App.css';

class PhotoGallery extends Component {

    constructor(props){
        super(props)

        this.state = {
            index : 0,
        }
    }

    onClickNext = () => {
        if(this.state.index + 1 === this.props.images.length){ // handle the last page with next click, move to the first page
            this.setState({
                index: 0
            })
        }
        else{
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    onClickPrev = () => {
        if(this.state.index === 0){// handle the first page with prev click, move to the last page
            this.setState({
                index: this.props.images.length - 1
            })
        }
        else{
            this.setState({
                index: this.state.index - 1
            })
            
        }
    }

    onClick = () => {
        //let swipe = new Swipe();
        //alert("Swipe!");
        alert('whatever');
        //(new Swipe(document.getElementById('App'))).onLeft(function() { alert('You swiped left.') }).run();
    }

    render(){
        return (
            <div className="App" id="App" Swipe={this.onClick}>
                <body className="App-body">
                    <div className="figure">
                        <picture>
                            <img src={this.props.images[this.state.index].url} alt={this.props.images[this.state.index].caption} width="900" height="600"></img>
                        </picture>
                        <div id="lightboxImageCaption #2" class="lightbox-image-caption">{this.props.images[this.state.index].caption}</div>
                        <button className="Left-Button" onClick={this.onClickPrev}>
                                <svg className="Left-Rotate" focusable="faßlse" role="img"> 
                                    <title>Prev</title>
                                    <g stroke="none">
                                        <path d="M16 4A12 12 0 114 16 12 12 0 0116 4m0-2a14 14 0 1014 14A14 14 0 0016 2z"></path>
                                        <path d="M22.7 13.3a1 1 0 00-1.4 0L16 18.6l-5.3-5.3a1 1 0 00-1.4 0 1 1 0 000 1.4l6 6a1 1 0 001.4 0l6-6a1 1 0 000-1.4z"></path>
                                    </g>
                                </svg>
                        </button>
                        <button className="Right-Button" onClick={this.onClickNext}>
                                <svg className="Right-Rotate" focusable="false" role="img">
                                    <title>Next</title>
                                    <g stroke="none">
                                        <path d="M16 4A12 12 0 114 16 12 12 0 0116 4m0-2a14 14 0 1014 14A14 14 0 0016 2z"></path>
                                        <path d="M22.7 13.3a1 1 0 00-1.4 0L16 18.6l-5.3-5.3a1 1 0 00-1.4 0 1 1 0 000 1.4l6 6a1 1 0 001.4 0l6-6a1 1 0 000-1.4z"></path>
                                    </g>
                                </svg>
                        </button>
                    </div>
                </body>
            </div>
        );
    }
}

export default PhotoGallery;