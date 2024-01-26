import { Originals,Action } from './components/constants/Urls';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RawPost from './components/Rawpost/RawPost';
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <RawPost url={Originals} titles="Netflix Originals" />
    <RawPost url={Action} titles="Action" isSmall />
    </>
  );
}

export default App;
