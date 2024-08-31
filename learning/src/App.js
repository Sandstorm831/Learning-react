import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image_slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random_color';
import StarRating from './components/star_rating';
import Treeview from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qrcode';
import LightDarkMode from './components/light_dark_mode';
import ScrollIndicator from './components/custom_scroll_indicator';
import TabTest from './components/custom-tabs/tabs-test';
import ModalTest from './components/custom_modal_popup/modal-test';
import GithubProfileFinder from './components/github_profile_finder';
import SearchAutoComplete from './components/search-autocomplete';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchTest from './components/useFetch/test';
import OutsideClickTest from './components/clickOutside/test';
import UseWindowResizeTest from './components/useWindowResize/test';
import ScrollTopBottom from './components/ScrollTopBottom';
import SectoinScroller from './components/ScrollSection';



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

      {/* Tree View component / menu UI component / recursive navigation component */}
      <Treeview menus={menus} />

      {/* QR Code Generator */}
      <QRCodeGenerator />

      {/* Light Dark Mode */}
      <LightDarkMode />

      {/* Custom Scroll Indicator */}
      <ScrollIndicator url='https://dummyjson.com/products?limit=100'/>

      {/* Custom Tabs */}
      <TabTest />

      {/* Custom Modal Popup */}
      <ModalTest />

      {/* Github Profile finder */}
      <GithubProfileFinder />

      {/* Search Autocomplete */}
      <SearchAutoComplete />

      {/* Feature Flag implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags key={"dom-dom"}/>
      </FeatureFlagGlobalState>

      {/* UseFetch custom hook */}
      <UseFetchTest />

      {/* clickOutside to close me */}
      <OutsideClickTest />

      {/* useWindowResize */}
      <UseWindowResizeTest />

      {/* Scroll to Top and Bottom */}
      <ScrollTopBottom />

      {/* Scroll to Section */}
      <SectoinScroller />
    </div>
  );
}

export default App;
