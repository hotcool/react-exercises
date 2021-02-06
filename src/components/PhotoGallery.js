import React, {Component} from 'react';
import Figure from 'react-bootstrap/Figure'
import './App.css';

class PhotoGallery extends Component {

    constructor(props){
        super(props)

        this.state = {
            index : 0,
        }
    }

    //const images = this.props.images;

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

    render(){
        return (
            <div className="App">
                <body className="App-body">
                    <div className="figure">
                        <Figure>
                            <Figure.Image
                                width={150}
                                height={100}
                                alt="150x100"
                                src={this.props.images[this.state.index].url}
                            />
                            <Figure.Caption >{this.props.images[this.state.index].caption}</Figure.Caption>
                        </Figure>
                        <button className="Left-Button" onClick={this.onClickPrev}>
                                <svg className="Left-Rotate" focusable="false" role="img"> 
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

/*
            <div style={{"display": "flex","verticalAlign": "middle", "textAlign": "center"}}>
                <img  src = {this.props.images[this.state.index].url} width="150" height="100"></img>
                <button style={{"height": "100%","width": "60px","position": "absolute","top": "0px","margin": "0px","z-index": "11","outline": "currentcolor none medium","background-color": "transparent","border": "medium none","padding-left": "8px"}} onClick={this.onClickPrev}>Prev</button>
                <button style={{"height": "100%","width": "60px","position": "absolute","top": "0px","margin": "0px","z-index": "11","outline": "currentcolor none medium","background-color": "transparent","border": "medium none","right": "0px","padding-right": "8px"}} onClick={this.onClickNext}>Next</button>
            </div>
            */
        );
    }
}

export default PhotoGallery;