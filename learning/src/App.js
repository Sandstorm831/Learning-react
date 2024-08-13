import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image_slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random_color';
import StarRating from './components/star_rating';

function App() {
  return (
    <div className='App'>
      {/* Accordian component */}
      <Accordian />

      {/* Random color component */}
      <RandomColor />

      {/* Star Rating */}
      <StarRating numStars={10} />

      {/* Image slider */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={4} />

      {/* Load More Data */}
      <LoadMoreData />
    </div>
  );
}

export default App;
