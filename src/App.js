import './App.css';
import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min"
import * as THREE from "three";
import {Box, Button} from "@mui/material"

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          // minHeight: 600,
          // maxHeight: 750.0,
          // minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x318f96,
  // size: 1.60,
          backgroundColor: 0xd28938
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div class="fullscreen" ref={vantaRef}>
        {/* <h1> Welcome </h1> */}
        <Box
          sx={{
            // padding:4,
            margin: 'margin-left',
            padding: 'padding-top',
            padding: 20,
            height:1/2,
            width:1/2,
          }}
        >
          
          <h1>Interview Prep</h1>
          <h2>Nervous? Stressed? Not Confident?</h2>
          <h3>We have you covered! InterviewAI analzes your facial expressions as well as body language and gives you tips on how to nail your next interview!</h3>
          <Button
          variant="contained">Waitlist!</Button>
        </Box>
    </div>

  );
}

export default App;
