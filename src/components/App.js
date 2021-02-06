import logo from './logo.svg';
import './App.css';
import PhotoGalleryComponent from './PhotoGallery.js';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      images: [{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/150px-Flag_of_California.svg.png","caption": "California"},{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/150px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png","caption": "Colorado"},{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/150px-Flag_of_Texas.svg.png","caption": "Texas"},{"url": "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/Flag-of-Washington-state.jpg?itok=FES3Fv_s","caption": "Washington"}]
    }
}
  render(){
    return (
      <PhotoGalleryComponent images={this.state.images}/>
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    );
  }
}

export default App;
