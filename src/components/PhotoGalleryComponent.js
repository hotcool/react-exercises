import React, { useEffect, useState } from 'react';
import { useSwipeable } from "react-swipeable";
import useWindowDimensions from '../hooks/useWindowDimensions.js';
import './App.css';

const PhotoGalleryComponent = (props) => {
    let [index, setIndex] = useState(0);
    let [images, setImages] = useState(props.images);
    const { height, width } = useWindowDimensions();
    let [mounted, setMounted] = useState(false);

    if(!mounted){
        images = images.filter(function(image) { return (isEmpty(image) && isEmpty(image.url) && isEmpty(image.caption))});
        setImages(images);
        setMounted(true);
    }

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });   
      
        useEffect(() => {
          function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          alert("Width: " + windowSize.width + ", height: " + windowSize.height);
          window.addEventListener("resize", handleResize);
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
      
        }, []);     
        alert("Width: " + windowSize.width + ", height: " + windowSize.height);
        return windowSize;
      }

    const handlers = useSwipeable({
        onSwipedRight: (eventData) => moveLeft(),
        onSwipedLeft: (eventData) => moveRight(),
      });

    function isEmpty(value){
       return (typeof value !== 'undefined' && value);
    }

    function moveRight(){
        if(index + 1 === images.length){
            index = 0;
        }
        else{
            index += 1;
        }
        setIndex(index);
    }

    function moveLeft(){
        if(index === 0){
            index = images.length - 1;
        }
        else{
            index -= 1;
        }
        setIndex(index);
    }
    

    const onClickNext = () => {
        moveRight();
    }

    const onClickPrev = () => {
        moveLeft();
    }

    if(height <= 300){
        return (
            <div className="App">
                <body className="App-body">
                    <div className="figure" {...handlers}>
                        <picture>
                            <img src={images[index].url} alt={images[index].caption} width="150" height="100"></img>
                        </picture>
                        <div id="lightboxImageCaption #2" class="lightbox-image-caption-height-small">{images[index].caption}</div>
                        <button className="Left-Button" onClick={onClickPrev}>
                                <svg className="Left-Rotate-height-small" focusable="faßlse" role="img"> 
                                    <title>Prev</title>
                                    <g stroke="none">
                                        <path d="M16 4A12 12 0 114 16 12 12 0 0116 4m0-2a14 14 0 1014 14A14 14 0 0016 2z"></path>
                                        <path d="M22.7 13.3a1 1 0 00-1.4 0L16 18.6l-5.3-5.3a1 1 0 00-1.4 0 1 1 0 000 1.4l6 6a1 1 0 001.4 0l6-6a1 1 0 000-1.4z"></path>
                                    </g>
                                </svg>
                        </button>
                        <button className="Right-Button" onClick={onClickNext}>
                                <svg className="Right-Rotate-height-small" focusable="false" role="img">
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
    else if(width <= 500){
        return (
            <div className="App">
                <body className="App-body">
                    <div className="figure" {...handlers}>
                        <picture>
                            <img src={images[index].url} alt={images[index].caption} width="150" height="100"></img>
                        </picture>
                        <div id="lightboxImageCaption #2" class="lightbox-image-caption-width-small">{images[index].caption}</div>
                        <button className="Left-Button" onClick={onClickPrev}>
                                <svg className="Left-Rotate-width-small" focusable="faßlse" role="img"> 
                                    <title>Prev</title>
                                    <g stroke="none">
                                        <path d="M16 4A12 12 0 114 16 12 12 0 0116 4m0-2a14 14 0 1014 14A14 14 0 0016 2z"></path>
                                        <path d="M22.7 13.3a1 1 0 00-1.4 0L16 18.6l-5.3-5.3a1 1 0 00-1.4 0 1 1 0 000 1.4l6 6a1 1 0 001.4 0l6-6a1 1 0 000-1.4z"></path>
                                    </g>
                                </svg>
                        </button>
                        <button className="Right-Button" onClick={onClickNext}>
                                <svg className="Right-Rotate-width-small" focusable="false" role="img">
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
    else{
        return (
            <div className="App">
                <body className="App-body">
                    <div className="figure" {...handlers}>
                        <picture>
                            <img src={images[index].url} alt={images[index].caption} width="900" height="600"></img>
                        </picture>
                        <div id="lightboxImageCaption #2" class="lightbox-image-caption">{images[index].caption}</div>
                        <button className="Left-Button" onClick={onClickPrev}>
                                <svg className="Left-Rotate" focusable="faßlse" role="img"> 
                                    <title>Prev</title>
                                    <g stroke="none">
                                        <path d="M16 4A12 12 0 114 16 12 12 0 0116 4m0-2a14 14 0 1014 14A14 14 0 0016 2z"></path>
                                        <path d="M22.7 13.3a1 1 0 00-1.4 0L16 18.6l-5.3-5.3a1 1 0 00-1.4 0 1 1 0 000 1.4l6 6a1 1 0 001.4 0l6-6a1 1 0 000-1.4z"></path>
                                    </g>
                                </svg>
                        </button>
                        <button className="Right-Button" onClick={onClickNext}>
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

export default PhotoGalleryComponent;