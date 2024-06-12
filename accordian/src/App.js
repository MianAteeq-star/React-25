import './App.css';
import Accordian from './components/Accordian';
import RandomColor from './components/ColorGenerator';
import StarRating from './components/Star-Rating';
import ImageSlider from './components/imageSlider';

function App() {
  return (
    <div className="App">
      {/* Accordian  Component*/}
     {/* <Accordian/> */}

     {/* Random Color Component */}
     {/* <RandomColor/> */}

     {/* Star Rating Component */}
     {/* <StarRating /> */}

     {/* Image Slider Component */}
<ImageSlider url={"https://picsum.photos/v2/list" } limit={"10"}  page={"1"}/>
    


    </div>
  );
}

export default App;
