import './App.css';
import {useRef,useEffect} from 'react'
import palmsmall1 from './Images/palm1_small-removebg-preview.png'
import palmsmall2 from './Images/palm2_small-removebg-preview.png'
import palmsmall3 from './Images/palm3_small-removebg-preview.png'
import palm from './Images/palm-removebg-preview.png'
import palm2 from './Images/palm2-removebg-preview.png'
import bush from './Images/bush_small-removebg-preview.png'
import rook from './Images/rooksmall-removebg-preview.png'
import wrook from './Images/w_rook-removebg-preview.png'
import queen from"./Images/queen.png"
import horse from"./Images/horse.png"

import useWebAnimations from "@wellyshen/use-web-animations";



function App() {
  const back= useWebAnimations({
    
    keyframes: {
      transform: ['translateX(10%)','translateX(-100%)'], // Move by 500px
      // Go through three colors
    },
    animationOptions: {
      duration: 90000,
      iterations: Infinity
    }})
    const front= useWebAnimations({
    
      keyframes: {
        transform: ['translateX(10%)','translateX(-100%)'], // Move by 500px
        // Go through three colors
      },
      animationOptions: {
        duration: 100000,
        iterations: Infinity
      }})
    const img= useWebAnimations({
      keyframes: {
        transform: ['translateY(0%)','translateY(-100%)'],
        
        // Go through three colors
      },
      animationOptions: {// Run for 1000ms
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 900,
        iterations: Infinity
      }})
      const scenaries=[back,img,front]
      setTimeout(()=>{
        if (img.getAnimation().playbackRate>1) {
          
          scenaries.forEach(cur=>cur.getAnimation().playbackRate-=0.3)
        }
       else if (img.getAnimation().playbackRate>2) {
          
          scenaries.forEach(cur=>cur.getAnimation().playbackRate-=1)
        }
        else{
          scenaries.forEach(cur=>cur.getAnimation().playbackRate=1)

        }
      },1000)
      function gofast(){
        if(img.getAnimation().playbackRate>200){
          scenaries.forEach(cur=>cur.getAnimation().playbackRate=1)

        }
        else{

          scenaries.forEach(cur=>cur.getAnimation().playbackRate*=1.1)
        }
        }
      const body=  document.getElementsByTagName('body')
      body[0].addEventListener('click',gofast)
      body[0].addEventListener('touch',gofast)

      return (
  <>
    <div className="firstback"></div>
    <div className="secoundback">
      <div className="queen" >
        <img src={queen} ref={img.ref} alt={queen}  />
     </div>
    <div className="firstele" ref={front.ref}>
      <img src={horse} alt="horse" />
      <img src={rook} alt="rook" />
      <img src={palm2} alt="palm1" />
      <img src={bush} alt="palm1" style={{marginTop:'20%'}} />
      <img src={palmsmall2} alt="plant" />
      <img src={wrook} alt="plant" />

</div>
<div className="secoundele" ref={back.ref}>
      <img src={palmsmall1} alt="plant" height={300}/>
      <img src={rook} alt="rook" />

      <img src={palm} alt="palm" />
  <img src={palmsmall1} alt="plant" />

</div>


</div>

  </>

);
}

export default App;
