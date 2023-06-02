import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components'
import StoreListing from './components/StroreListing';
import Background from './components/background';

/*const Splash = styled.div`
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${SplashImage});
  background-color: #dfeed6;
  position: absolute;
  left: 0px;
  top: 40px;
  right: 0;
  z-index: -1;
`*/

function App() {
  return <>
    <TopBar/>
    <Background/>
    <StoreListing/>
  </>
}

export default App;
