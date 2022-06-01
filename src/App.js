import './App.css';
import {useRef,useEffect} from 'react'
import queen from './images/red-queen.gif'
// import useWebAnimations from "@wellyshen/use-web-animations";
function App() {
const ref = useRef(null)
useEffect(() => {ref.current.animate([
  { transform: 'translatex(-200px)'},
  { transform: 'translatex(1000px)'},
  { transform: 'translatex(2000px)'},
 

],
 {duration: 8000,iterations: Infinity}
)
}, [])

  return (


<div className="back">
  <img src={queen} alt="" ref={ref}/>
  </div>



  );
}

export default App;
